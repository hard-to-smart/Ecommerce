import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
  const featuredProductData = useLoaderData()
  console.log(featuredProductData)
  return (
    <section id='featuredProducts'> 
    <h2 className='text-center'>Our Top Products</h2>
<div className='flex flex-wrap gap-2 justify-center'>
{  featuredProductData.map((product)=>{
  return <ProductCard key={product.id} product={product}/>
  })}
</div>
</section>
)
}
export default FeaturedProducts;