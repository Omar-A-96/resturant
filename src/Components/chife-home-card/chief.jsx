import { AiFillYoutube } from "react-icons/ai"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import './chief.css'
export default function Chef(props){
    return(
        <div className="card-chef col-xl-2 col-lg-3 col-md-6 col-sm-12">
            <div className="image">
                <img src={props.image} alt="" />
                <div className="cir"></div>
            </div>
            <div className="text">
                <h2>{props.name}</h2>
                <p>{props.title}</p>
                <div className="icon">
                   <CgFacebook /> <AiOutlineInstagram /><AiOutlineTwitter /><AiFillYoutube />
                </div>
            </div>
        </div>
    )
}