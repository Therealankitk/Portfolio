import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
export default function Footer(){
    return(
        <div className="footerContent">
            <p><i>Man is nothing else but what he makes of himself.</i></p>
            <p><FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} Ankit Kundu. All rights reserved.</p>
        </div>
    )
}