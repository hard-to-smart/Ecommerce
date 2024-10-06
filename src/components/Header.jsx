import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import PriceConvertor from "./PriceConvertor";
import { useLocation } from "react-router-dom";
const Header = () => {
  const { cartProduct } = useContext(CartContext);
  const [displayConvertor, setDisplayCovertor] = useState(true);
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname==='/blog'){
      setDisplayCovertor(false);
    }
  }, [location.pathname])


  return (
    <>
      <header className=" flex justify-between shadow-lg items-center bg-white px-[10px] pt-2 text-xl text-stone-100 shadow-3xl">
        <NavLink to="/">
          <img src={logo} className="h-16 w-full ml-3" />
        </NavLink>
        {/* <ul className='flex flex-row gap-6'>
            <NavLink to="/products"> Products</NavLink>
            <NavLink >Orders</NavLink>
         <NavLink to="/blog"> Blogs</NavLink>
        </ul> */}

        <div className="flex flex-row gap-6 items-center">
          <NavLink to="/product" id="products">
            {" "}
            Products
          </NavLink>
          {/* <NavLink >Orders</NavLink>  */}

          <NavLink to="/blog" id="blogs">
            {" "}
            Blogs
          </NavLink>
          <NavLink>
            <FaHeart />
          </NavLink>
          <NavLink to="/cart" id="cart">
            <div className="relative flex">
              <FaShoppingCart />
              <div className="w-4 h-4 right-[-10px] top-[-8px] rounded-[50%] bg-amber-700 absolute text-sm flex justify-center text-red-800">
                {cartProduct.length}
              </div>
            </div>
          </NavLink>
          <NavLink id="user">
            <FaCircleUser />
          </NavLink>
        </div>
      </header>
      {displayConvertor && <PriceConvertor />}
    </>
  );
};

export default Header;
