import './text-1.css'
import iconMune from './../../images/menu.svg' 
import iconAbout from './../../images/arrow.svg'
export default function TextHome(props){
    return(
        <div className="text-1 col-md-12 col-lg-6 text-md-center text-lg-start">
        <h6>Hi, new friend!</h6>
        <h1>{props.title}</h1>
            <p>Consectetur numquam poro nemo veniam
            eligendi rem adipisci quo modi</p>
           <div className="buttom"> <a href="" className='ourMune'><img src={props.image1} alt="" />{props.textMune}</a>
           <a href="" className='About w-100'><img src={props.image2} alt="" />{props.textAbout}</a></div>
    </div>
    )
}