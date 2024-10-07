import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import noItems from '../assets/empty-cart.png'
import Bill from '../components/Bill';
const Cart = () => {
    const {cartProduct} = useContext(CartContext);
    useEffect(()=> localStorage.setItem('productsInCart', JSON.stringify(cartProduct)), [cartProduct])
    
  return (
    <div className='flex flex-row justify-between'>
    <section id='addedCarts' className='flex flex-wrap justify-center'>
<<<<<<< HEAD
       {cartProduct.length>0? cartProduct.map((product)=> <ProductCard key={product.id} product={product}/>):
       <img src={noItems}/> }
=======
       { cartProduct.map((product)=> <ProductCard key={product.id} product={product}/>)}
    </section>
    <section id='ordertotal' className='flex items-center'>
        <Card>
        <CardHeader>
          {/* <div>
        // st totalPriceHandler = () => {
    //     const total = productsInCart.reduce((acc, cur) => (cur.price * cur.quantity) + acc, 0);
    //     setTotalPrice(total)
    // }
    </div> */}
        </CardHeader>
        </Card>
>>>>>>> e9cc8d19d4007dfa84c2be8d7af10119fbadd9ca
    </section>
    { cartProduct.length>0 &&
      <Bill cartProduct={cartProduct}/>
    }
    </div>
  )
}

export default Cart