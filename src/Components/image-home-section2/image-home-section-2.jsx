import imageHomeSection2 from'./../../images/interior.jpg'
import pic from './../../images/1.svg'
import pIc from './../../images/2.svg'
import piC from './../../images/3.svg'
import './image-home-section2.css'  
export default function ImageHomeSection2(){
    return(
        <div className="image-2 col-md-12 col-lg-6 text-md-center ">
            <img src={imageHomeSection2} alt="" />
            <div className="sh-1"></div>
            <div className="sh-3"></div>
            <div className="sh-5"></div>
            <div className="exp">
                <div className="exp-1">
                    <p>17</p>
                    <p>Years Experiense</p>
                </div>
            </div>
        </div>
    )
}