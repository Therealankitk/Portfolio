import Navbar from "./navbar"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contacts from "./contact"
import Footer from "./Footer"
import { useRef } from "react"
export default function App() {
    const aboutRef = useRef(null)
    const skillRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)
    const homeRef = useRef(null)
    return (
        <>
            <div className="mobile-view">
                <h2>This portfolio is not suitable for the present device. <br /> Please open it on a laptop or desktop.</h2>
                <p>Apologies for the inconvenience caused.</p>
            </div>
            <div className="site">
                <div className="page1">
                    <Navbar homeRef={homeRef} aboutRef={aboutRef} skillRef={skillRef} projectRef={projectRef} contactRef={contactRef}/>
                    <Home homeRef={homeRef}/>
                </div>
                <div className="page2a">
                    <About aboutRef={aboutRef} contactRef={contactRef}/>
                </div>
                <div className="page2b">
                    <Skills skillRef={skillRef}/>
                </div>
                <div className="page3">
                    <Projects projectRef={projectRef}/>
                </div>
                <div className="page4">
                    <Contacts contactRef={contactRef}/>
                </div>
                <div className="page5">
                    <Footer />
                </div>
            </div>
        </>
    )
}