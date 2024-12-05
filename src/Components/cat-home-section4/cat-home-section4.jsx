import starters from "./../../images/1.png"
import main from "./../../images/2.png"
import drinks from "./../../images/3.png"
import dessert from "./../../images/4.png"
import './cat-home-section4.css'
export default function CatHome(){
    return(
        <><div className="cat col-xl-5 col-lg-6 col-md-12">
            <div className="image">
                <img src={starters} alt="" />
            </div>
            <div className="text">
                <h2>Starters</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div><div className="cat col-xl-5 col-lg-6 col-md-12">
                <div className="image">
                    <img src={main} alt="" />
                </div>
                <div className="text">
                    <h2>Main dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div><div className="cat col-xl-5 col-lg-126 col-md-">
                <div className="image">
                    <img src={drinks} alt="" />
                </div>
                <div className="text">
                    <h2>Drinks</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div><div className="cat col-xl-5 col-lg-6 col-md-12">
                <div className="image">
                    <img src={dessert} alt="" />
                </div>
                <div className="text">
                    <h2>Desserts</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div></>
    )
}