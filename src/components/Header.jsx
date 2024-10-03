import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


const Header = () => {
  const {cartProduct} = useContext(CartContext);
  return (
    <header className=' flex justify-between items-center bg-slate-800 px-[10px] pt-2 text-xl text-stone-100 shadow-3xl '>
        <NavLink to='/'>
          <img src={logo} className='h-16 w-full'/>
          </NavLink>
        <ul className='flex flex-row gap-6'>
            <NavLink to="/products"> Products</NavLink>
            <NavLink >Orders</NavLink> 
            <NavLink to="/blog"> Blogs</NavLink>
        </ul>
        <div className='flex flex-row gap-6'>
            <NavLink><FaHeart/></NavLink>
            <NavLink><div className="relative flex"><FaShoppingCart/><div className="w-4 h-4 right-[-10px] top-[-8px] rounded-[50%] bg-amber-700 absolute text-sm flex justify-center text-red-800">{cartProduct.length}</div></div></NavLink>
            <NavLink><FaCircleUser /></NavLink>
            </div>
    </header>
  )
}

export default Header