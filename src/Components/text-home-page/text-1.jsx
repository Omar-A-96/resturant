import './text-1.css'
import iconMune from './../../images/menu.svg' 
import iconAbout from './../../images/arrow.svg'
export default function TextHome(){
    return(
        <div className="text-1 col-md-12 col-lg-6 text-md-center text-lg-start">
        <h6>Hi, new friend!</h6>
        <h1>We do not cook,
            we create your
            emotions!</h1>
            <p>Consectetur numquam poro nemo veniam
            eligendi rem adipisci quo modi</p>
           <div className="buttom"> <a href="" className='ourMune'><span><img src={iconMune} alt="" /></span> Our Menu</a>
           <a href="" className='About'><span><img src={iconAbout} alt="" /></span> About</a></div>
    </div>
    )
}