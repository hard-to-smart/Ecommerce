import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link, useLoaderData } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import PriceConvertor from '../components/PriceConvertor';
const Products = () => {
  const productsData = useLoaderData()
  const { cartProduct, addToCart, updateQuantity } = useContext(CartContext)
  console.log(cartProduct)
  return (
    <>
    <section id='products' >
      <div className='flex flex-wrap gap-2 justify-center'>
      {
        productsData.map((product)=>
         <ProductCard key={product.id} product={product} addToCart={addToCart} cartProduct={cartProduct} updateQuantity={updateQuantity}/>
          )
      }
      </div>
    </section>
    </>
  )
}

export default Products