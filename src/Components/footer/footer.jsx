import { AiFillYoutube } from "react-icons/ai"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import './footer.css'
import logo from "../../images/logo.svg";
export default function Footer(){
    return(
        <div className="con">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="icon">
                <CgFacebook /><AiOutlineInstagram /><AiOutlineTwitter /><AiFillYoutube />
            </div>
            <div className="text">
                <p>© late 2021 Starbelly. All Rights Reserved.</p>
            </div>
        </div>
    )
}