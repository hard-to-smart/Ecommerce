import React from 'react'
import ProductCard from '../components/ProductCard'
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Card, CardHeader } from '@material-tailwind/react';
const Cart = () => {
    const {cartProduct} = useContext(CartContext);
    console.log(cartProduct[0])

  return (
    <div>
    <section id='addedCarts' className='flex flex-wrap justify-center'>
       { cartProduct.map((product)=> <ProductCard key={product.id} product={product}/>)}
    </section>
    <section id='ordertotal' className='flex items-center'>
        <Card>
        <CardHeader>
            
        </CardHeader>
        </Card>

    </section>
    </div>
  )
}

export default Cart