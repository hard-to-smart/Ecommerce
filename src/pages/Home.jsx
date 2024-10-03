import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div className='bg-teal-100'>
    <Carousel />
    <FeaturedProducts/>
    </div>
  )
}

export default Home