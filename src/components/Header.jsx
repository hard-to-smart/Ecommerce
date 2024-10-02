import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <header className='header flex justify-evenly bg-purple-200'>
        <div>
            <h1>Logo</h1>
        </div>
        <ul>
            <NavLink> Products</NavLink>
            {/* <NavLink> Orders</NavLink> */}
            <NavLink> Blogs</NavLink>
        </ul>
        <div>
            <NavLink>Cart</NavLink>
            <NavLink>User</NavLink>
        </div>
    </header>
  )
}

export default Header