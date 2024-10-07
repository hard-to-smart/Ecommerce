import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import noItems from "../assets/empty-cart.png";
import Bill from "../components/Bill";
const Cart = () => {
  const { cartProduct } = useContext(CartContext);
  useEffect(
    () => localStorage.setItem("productsInCart", JSON.stringify(cartProduct)),
    [cartProduct]
  );

  return (
    <div className='flex flex-row justify-between'>
    <section id='addedCarts' className='flex flex-wrap justify-center'>
       {cartProduct.length>0? cartProduct.map((product)=> <ProductCard key={product.id} product={product}/>):
       <img src={noItems}/> }
    </section>
    { cartProduct.length>0 &&
      <Bill cartProduct={cartProduct}/>
    }
    </div>
  )
}
export default Cart;
