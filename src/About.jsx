import { motion } from "framer-motion"
export default function About({aboutRef,contactRef}){
    const scrolltoContact = () => {
        contactRef.current.scrollIntoView({behavior : "smooth"})
    }
    return(
        <>
            <motion.div className="box" ref={aboutRef}
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:0.3,duration:0.5}}>
                <h2>about me</h2>
                <span>
                    <p>Hi, I'm Ankit. A web developer passionate about building dynamic, responsive and user friendly websites that not only look attractive but focuses on client experience. I specialize in the MERN stack and optimization algorithms, with a growing interest in AI/ML development. I am detail-oriented and love making real world applications. From fun web based games to object oriented webisites to smart AI tools to your company's landing page. <span className="makebetter">&nbsp;I cover it all. </span></p>
                
                    <p>I enjoy challenging myself with new technologies and hands on projects by expanding my skillset. Actively seeking for opportunities to contribute to startups and impactful teams.</p>
                
                    <p>Apart from coding, I am a painter and a music enthusiast with a keen interest in philosophy.</p> 
                    <motion.span className="special" onClick={scrolltoContact} 
                        whileHover={{scale:1.1}}
                        transition={{type:'spring'}}>Wanna work together?</motion.span>
                </span>
            </motion.div>
        </>
    )
}