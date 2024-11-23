import ImageHome from "../../Components/image-home-page/imageHome";
import ImageHomeSection2 from "../../Components/image-home-section2/image-home-section-2";
import TextHome from "../../Components/text-home-page/text-1";
import TextSection2 from "../../Components/text-home-section2/text-home-section2";
import './HomePage.css'  
export default function HomePage(){
    return(
        <section className="section-1">
            <div className="container">
                <div className="row contact">
                            <TextHome/>
                            <ImageHome/>
                </div>
            </div>
            <div className="sectino-2">
                <div className="container">
                    <div className="row contact">
                    <ImageHomeSection2/>
                    <TextSection2/>
                    </div>
                </div>
            </div>
        </section>
        
        
    )
}