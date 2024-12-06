import AboutHead from '../../Components/compnentAboutPage/section-1/section-1'
import About2 from '../../Components/compnentAboutPage/section-2/section-2'

import './AboutPage.css'
export default function AboutPage(){
    return(
        <section>
            <div className="section-1">
                <div className="container">
                       <AboutHead/>
                </div>
            </div>
            <div className="section-2">
                <div className="container">
                    <About2/>
                </div>
            </div>
        </section>
    )
}