import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faLink } from '@fortawesome/free-solid-svg-icons';
import { delay, motion } from 'framer-motion';
export default function projectCards(props){
    return(
        <motion.div className="projcard" 
            initial={{x:-200,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:0.1,type:'spring',stiffness:100}}>
            {props.vid? (
                <video src={props.vid} loop autoPlay className="projvid"/>
                ):(
                <img src={props.img} className="projimg"/>
            )}
            <div className="projabout">
                <div className="projdesc">
                    <h4>{props.title}</h4>
                    <span>{props.desc}</span>
                </div>
                <div className="projlinks">
                    {props.play? (<a href={props.play}><FontAwesomeIcon icon={faGamepad} /></a>) : null}
                    {props.goto? (<a href={props.goto}><FontAwesomeIcon icon={faLink} /></a>) : null}
                </div>
            </div>
        </motion.div>
    )
}