import { useState, useEffect } from "react"
import { Cursor } from "react-simple-typewriter"
import { motion } from "framer-motion"
export default function navbar({ aboutRef,skillRef,projectRef,contactRef,homeRef }){
    const [show,setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrollUp, setScrollUp] = useState(false)

    const scrolltoAbout = () => {
        aboutRef.current.scrollIntoView({behavior : "smooth"})
    }
    const scrolltoSkill = () => {
        skillRef.current.scrollIntoView({behavior : "smooth"})
    }
    const scrolltoProject = () => {
        projectRef.current.scrollIntoView({behavior : "smooth"})
    }
    const scrolltoContact = () => {
        contactRef.current.scrollIntoView({behavior : "smooth"})
    }
    const scrolltoHome = () => {
        window.scrollTo({top:0,behavior : "smooth"})
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY === 0){
                setShow(true)
                setScrollUp(false)
            }else if(window.scrollY > lastScrollY){
                setShow(false)
                setScrollUp(false)
            }else if(lastScrollY - window.scrollY > 20){
                setShow(true)
                setScrollUp(true)
            }

            setLastScrollY(window.scrollY)
        };

        window.addEventListener("scroll",handleScroll)
        return () => {
            window.removeEventListener("scroll",handleScroll)
        };
    }, [lastScrollY])
    return (
        <motion.div className={`nav ${show ? "visible" : "hidden"} ${scrollUp ? "scroll-up" : ""}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
            transition={{duration:0.1}}>
            <h2 onClick={scrolltoHome} style={{cursor:"pointer"}}>my portfolio.</h2>
            <ul className="navlist">
                <li className="nav-lis-item undanim" onClick={scrolltoAbout}>About Me</li>
                <li className="nav-lis-item undanim" onClick={scrolltoSkill}>Skills</li>
                <li className="nav-lis-item undanim" onClick={scrolltoProject}>Projects</li>
                <li className="nav-lis-item undanim" onClick={scrolltoContact}>Contact</li>
            </ul>
        </motion.div>
    )
}