import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import'./btn-cate.css'
export default function CateBtn(props){
return(
    <div className="container">
        <div className="bb d-flex">
                <button className='d-flex'>{props.catee.tags} </button>          
        </div>
    </div>
)
}