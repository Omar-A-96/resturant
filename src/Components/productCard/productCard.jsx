import { BiCart } from "react-icons/bi"; 
import { BiShoppingBag } from "react-icons/bi"; 
import { BsFillCartFill } from "react-icons/bs"; 
import { AiFillStar } from "react-icons/ai"; 
import { AiOutlineStar } from "react-icons/ai"; 
 
import'./productCard.css'
import { Link } from "react-router-dom";
export default function ProductCard(props){


   



    return(
        <div class="Card col-xl-3 col-lg-4 col-md-6 col-sm-12" data-aos="fade-down">
            <div className="image"><img src={props.product.image} alt="" /></div>
           <div className="card-title">
            <div className="name">{props.product.name}</div>
            <div className="price">${props.product.userId}</div>
           </div>
           <div className="card-dis     overflow-auto">
            <p>{props.product.instructions}</p>
           </div>
           <div className="card-rate"><AiFillStar className="star"/><AiFillStar className="star"/><AiFillStar className="star"/><AiFillStar className="star"/><AiFillStar className="star"/><span>({props.product.rating} rating)</span></div>
            <div className="card-btn">
                {/* <div className="btn-1"><BiShoppingBag className="cart"/><Link to={`/productdetalis`}>Add To cart</Link></div> */}
                <div className="btn-2"><BiCart  className="cart"/><Link to={`/productdetalis/${props.product.id}`}>Add To cart</Link></div>
            </div>
        </div>
       
       
    )
}