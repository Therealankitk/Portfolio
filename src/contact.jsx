import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faWhatsapp , faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { motion } from 'framer-motion';
export default function Contacts({contactRef}){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_13c8xqa',        
        'template_t4irysk',       
        form.current,
        'edTSTl7exTIyUNaMn'         
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Something went wrong. Please try again.');
          console.error(error.text);
        }
      );
  };
    return (
        <>
        <motion.div className="contactext" ref={contactRef}
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.2,duration:0.5}}>
            <h2>contact me</h2>
            <h3>feel free to drop a message.</h3>
            <h3>lets create something crazy together.</h3>
            <motion.div className="info"
              initial={{x:-300}}
              whileInView={{x:0}}
              transition={{duration:0.4}}>
                <h4>info.</h4>
                <p>| <FontAwesomeIcon icon={faEnvelope} beat className='conlinks'/><span>ankitkundu2005@gmail.com</span></p>
                <p>| <FontAwesomeIcon icon={faWhatsapp} beat className='conlinks'/><span>+91 9433481197</span></p>
                <h5>Other places you can reach me...</h5>
                <a href="https://www.instagram.com/therealankitk/"><FontAwesomeIcon icon={faInstagram} beat className='otherlinks'/></a>
                <a href="https://www.linkedin.com/in/ankit-kundu-a18a202bb/"><FontAwesomeIcon icon={faLinkedin} beat className='otherlinks'/></a>

            </motion.div>
        </motion.div>
        <motion.div className="contactform"
          initial={{y:300,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.4,type:'spring',stiffness:100}}>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <h3>kindly fill this for me.</h3>
                <input type="text" name="user_name" placeholder="name" required />
                <input type="email" name="user_email" placeholder="email" required />
                <textarea name="message" rows="5" placeholder="leave a note" required />
                <motion.button type="submit" whileHover={{scale:1.05,boxShadow:"0px 0px 5px #121212b6"}}>Hook Me Up</motion.button>
            </form>
        </motion.div>
        </>
    )
}