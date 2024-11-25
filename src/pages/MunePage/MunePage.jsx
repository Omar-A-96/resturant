import { useEffect, useState } from "react"
import ProductCard from "../../Components/productCard/productCard"
import'./MunePage.css'
export default function MunePage(){
    const [products,setproducts]=useState([])

async function ProductData() {
    let res = await fetch('https://dummyjson.com/recipes')
    let data = await res.json()
    setproducts(data)    
}


    useEffect(()=>{
        ProductData()
    },[])



    return(
   
        <section className="section-card">
        <div className="container"> 
            <div className="row">
        {
            products?.recipes?.map((product)=>{
                return(
                    <ProductCard   product={product}/>
                )
            }) 
        }
        </div> 
        </div> 
        </section>
        
    
    )
}