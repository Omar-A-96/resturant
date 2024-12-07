import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './productdetalis.css'
export default function ProductDetalis(){
   const[data , setdata] =useState({})
    const params =useParams()


    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes/${params.productId}`)
        .then(res => res.json())
        .then(json=>setdata(json));
    },[])

console.log(data)

    return(
        <div className="contanier">
            <div className="row ">
                {data.name}
                <h1>{data.price}</h1>
            </div>
        </div>
    )
}