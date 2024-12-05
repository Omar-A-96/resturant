import { useEffect, useState } from "react"
import ProductCard from "../../Components/productCard/productCard"
import'./MunePage.css'
import CateBtn from "../../Components/btn-cate/btn-cate"
import { useParams } from "react-router-dom"
export default function MunePage(){
    const [products,setproducts]=useState([])
    
 const params=useParams()
async function ProductData() {
    let res = await fetch('https://dummyjson.com/recipes')
    let data = await res.json()
    setproducts(data)    
}



const [cate,setcate]=useState()

async function CateData() {
    let res = await fetch(`https://dummyjson.com/recipes/tag/${params.catee}`)
    let pp = await res.json()
    setcate(pp)    
}
useEffect(()=>{
    ProductData()
    CateData()
},[])


   

   

    return(
        
   
        <section className="section-card">
             {
            products?.recipes?.map((catee)=>{
                return (
                    <CateBtn catee={catee}/>
                )
            })
        }
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