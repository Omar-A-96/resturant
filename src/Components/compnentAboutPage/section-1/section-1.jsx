import { Link } from 'react-router-dom'
import './section-1.css'
export default function AboutHead(){
    return(
        <div className="head">
            <div className="text">
                <h1>About</h1>
            </div>
            <div className="button">
                 <Link to="/">Home <span>/ About</span></Link>
            </div>
        </div>
    )
}