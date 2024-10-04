import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link, useLoaderData } from 'react-router-dom'
import PriceConvertor from '../components/PriceConvertor';
const Products = () => {
  const productsData = useLoaderData()
  return (
    <>
    <section id='products' >
      <div className='flex flex-wrap gap-2 justify-center'>
      {
        productsData.map((product)=>
         <ProductCard key={product.id} product={product}/>
          )
      }
      </div>
    </section>
    </>
  )
}

export default Products