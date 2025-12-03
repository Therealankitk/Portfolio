import TypeWriter from "./TypeWriter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { db } from "./firebase"
import { ref, get } from "firebase/database"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import profile from "./assets/profilePhoto.png"
export default function home({homeRef}){
    const [resume,setResume] = useState("");
    useEffect(() => {
        async function fetchResume() {
            try{
                const snapshot = await get(ref(db, "site/resume"));
                if(snapshot.exists()){
                    const link = snapshot.val();
                    setResume(link.cvlink)
                }
            }catch(err){
                alert('Error downloading resume!!');
            }
        }
        fetchResume();
    },[]);
    return (
        <div className="heropage">
            <motion.div className="home" ref={homeRef} 
                initial={{x:-400}}
                whileInView={{x:0}}
                transition={{delay:0.2, type:'spring', stiffness:100}}>

                <h1 style={{fontSize:'3rem'}}>Hello World</h1>
                <div className="name">
                    <h1><span style={{fontFamily: 'Rouge Script',fontSize: '3rem'}}>I'm </span>Ankit Kundu</h1>
                    <TypeWriter />
                </div>
                <ul className="links">
                    <li><a href="https://github.com/Therealankitk"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/ankit-kundu-a18a202bb/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
                <a href={resume}>
                    <button className="resume-btn anim-btns">
                        <span>Download Resume</span>
                    </button>
                </a>
            </motion.div>
            <div className="profile">
                <motion.img src={profile} alt="profile-pic" 
                    initial={{opacity:0 , x:50}}
                    whileInView={{opacity:1, x:0}} 
                    transition={{delay:0.6, duration:0.4}}/>
            </div>
        </div>
    )
}