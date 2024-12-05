import { AiFillStar } from 'react-icons/ai'
import './slider-card.css'
export default function Sliderr(props){
    return(
        <div className="Card col-xl-12 g-2 ">
            <div className="image">
                <img src={props.product.image} alt="" />
            </div>
            <div className="card-title">
            <div className="name">{props.product.name}</div>
            <div className="price">${props.product.userId}</div>
           </div>
           <div className="card-dis     overflow-auto">
            <p>{props.product.instructions}</p>
           </div>
           <div className="card-rate"><AiFillStar className="star"/><AiFillStar className="star"/><AiFillStar className="star"/><AiFillStar className="star"/><AiFillStar className="star"/><span>({props.product.rating} rating)</span></div>
        </div>
    )
}