import { AiOutlineUnorderedList } from "react-icons/ai"; 
import { BiShoppingBag } from "react-icons/bi"; 
import './navbar.css' 
import logo from'./../..//images/logo.svg'
import React, { useState } from 'react'

export default function Navbar(){
    const[isopen,setIsOpen]=useState(false)

    const ToggleMenu=()=>{
        setIsOpen(!isopen)
    }


    return(
        <div className="navbar">
            <div className="container">
            <div className="logo">
                  <div className="image-logo"><img src={logo} alt="" /></div>
            </div>
            <div className={isopen ? "list1" : "list"}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="media">
                <ul>
                    <li>
                        <button class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><BiShoppingBag /> <span>5</span></button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">Your Order</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body" >
                        <table class="table table-striped">
                        <thead>
<tr>
    <th>image</th>
    <th>cate</th>
    <th>price</th>
</tr>
</thead>
<tbody>
<tr>
    <td><img src={logo} alt="" /></td>
    <td>omar</td>
    <td>150</td>
</tr>
<tr>
    <td><img src={logo} alt="" /></td>
    <td>omar</td>
    <td>150</td>
</tr>
</tbody>
                        </table>
                        </div>
                        </div>
                        </li>
                        <li className="d-xl-none d-md-none d-lg-none" onClick={ToggleMenu}><AiOutlineUnorderedList /></li>
                </ul>
            </div>
            </div>
        </div>

    )
}
