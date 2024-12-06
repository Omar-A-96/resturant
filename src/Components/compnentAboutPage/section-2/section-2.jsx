import './section-2.css'
import sig from './../../../images/signature.png'
import imageAbout from './../../../images/2.jpg'
export default function About2(){
    return(
        <div className="first mt-5">
            <div className="row  ">
                <div className="im col-lg-5 col-md-12">
                    <div className="image">
                         <img src={imageAbout} alt="" />
                     </div>
                     <div className="sec-1"></div> 
                     <div className="sec-2"></div>
                     <div className="sec-3"></div>
                     <div className="sec-4">
                        <div className="text">
                        <h1>17</h1>
                        <p>Years
                        <br /> Experiense</p>
                        </div>
                     </div>
                </div>
            <div className="text col-lg-5 col-md-12" >
                <h1>We are doing more thanyou expect</h1>
                <p className=''>Faudantium magnam error temporibus ipsam aliquid neque quibusdam dolorum, quia ea numquam assumenda mollitia dolorem impedit. Voluptate at quis exercitationem officia temporibus adipisci quae totam enim dolorum, assumenda. Sapiente soluta nostrum reprehenderit a velit obcaecati facilis vitae magnam tenetur neque vel itaque inventore eaque explicabo commodi maxime! Aliquam quasi, voluptates odio.

                Consectetur adipisicing elit. Cupiditate nesciunt amet facilis numquam, nam adipisci qui voluptate voluptas enim obcaecati veritatis animi nulla, mollitia commodi quaerat ex, autem ea laborum.</p>
                {/* <img src={sig} alt="" /> */}
                </div>
            </div>
         
        </div>
    )
}