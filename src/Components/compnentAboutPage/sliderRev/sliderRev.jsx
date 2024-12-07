import './sliderRev.css'
import rev1 from "../../../images/rev1.jpg";
import rev2 from "../../../images/rev2 (1).jpg";
import rev3 from "../../../images/rev3.jpg";
import rev4 from "../../../images/rev4.jpg"
import Slider from 'react-slick';
export default function SliderRev(props){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className="container">
           <Slider {...settings}>
                {
                data.map((d)=>{
                    return(
                // <SliderRev d={d}/>
                <div className="revCard">
              <h1>{d.title}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur aliquam voluptate quia quidem necessitatibus voluptatum quaerat cum eum, corporis porro architecto ratione aut placeat natus nihil cupiditate incidunt? Eum, officiis?</p>
              <div className="text">
                <div className="imageaa">
                    <img src={d.image.rev1} alt="" />
                </div>
                <div className="name">
                    <h1>{d.name}</h1>
                </div>
              </div>
            </div> 
                    )
                            }) 
                    }
                    </Slider>
        </div>
    )
}


const data=[
    {
        title:"Very tasty",
        par:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!",
        image:{rev1},
        name:"Emma Newman"
    },
    {
        title:"I have lunch here every day",
        par:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!",
        image:{rev2},
        name:"Paul Trueman"
    },
    {
        title:"Great Service",
        par:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!",
        image:{rev3},
        name:"Fecktoria Freeman"
    },
    {
        title:"Starbelly is Amazing",
        par:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!",
        image:{rev4},
        name:"Audrey oldman"
    }

]