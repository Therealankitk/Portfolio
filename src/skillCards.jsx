import { motion } from "framer-motion"
export default function skillCards(props){
    return(
        <motion.div className="card" 
            initial={{opacity:0 , y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{delay: 0.05*props.id , duration:0.3}}>
            <img src={props.img.src} alt={props.img.alt} />
            <span className="cardtext">{props.name}</span>
        </motion.div>
    )
}