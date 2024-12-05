import { BiRightTopArrowCircle } from "react-icons/bi"; 
import './buttom-home-section3.css'
export default function Btnsection3(props){
    return(
        <div className="btn-section3 col-md-12 col-lg-6">
            <a href="#"><img src={props.icon} alt="" /> {props.textIcon}</a>
        </div>
    )
}