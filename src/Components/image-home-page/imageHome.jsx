import imageHome from'./../..//images/girl.png'
import pic from './../../images/1.svg'
import pIc from './../../images/2.svg'
import piC from './../../images/3.svg'
import './imageHome.css'  
export default function ImageHome(props){
    return(
        <div className="image-1 col-md-12 col-lg-6 ">
            <img src={props.image} alt="" />
            <div className="sh-1"></div>
            <div className="sh-3"></div>
            <div className="sh-5"></div>
            <img className='pic-1' src={pic} alt="" />
            <img className='pic-2' src={pIc} alt="" />
            <img className='pic-3' src={piC} alt="" />
        </div>
    )
}