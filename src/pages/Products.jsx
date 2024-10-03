import React from 'react'
import ProductCard from '../components/ProductCard'
import { useLoaderData } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
const Products = () => {
  const productsData = useLoaderData()
  const { cartProduct, addToCart } = useContext(CartContext)
  console.log(cartProduct)
  return (
    <section id='products' >
      <div className='flex flex-wrap gap-2 justify-center'>
      {
        productsData.map((product)=>{
         return <ProductCard key={product.id} product={product} addToCart={addToCart} cartProduct={cartProduct}/>
        })
      }
      </div>
    </section>
  )
}

export default Products