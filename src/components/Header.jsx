import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";


const Header = () => {
  return (
    <header className='header flex justify-between items-center bg-slate-800 px-[10px] pt-2 text-xl text-stone-100 shadow-3xl '>
        <NavLink to='/'>
          <img src={logo} className='h-16 w-full'/>
          </NavLink>
        <ul className='flex flex-row gap-6'>
            <NavLink to="/products"> Products</NavLink>
            <NavLink> Orders</NavLink> 
            <NavLink> Blogs</NavLink>
        </ul>
        <div className='flex flex-row gap-6'>
            <NavLink><FaHeart/></NavLink>
            <NavLink><FaShoppingCart /></NavLink>
            <NavLink><FaCircleUser /></NavLink>
            </div>
    </header>
  )
}

export default Header