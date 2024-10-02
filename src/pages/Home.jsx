import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import { Banner } from '../components/Carousel'

const Home = () => {
  return (
    <div className='bg-teal-100'>
    <Banner />
    <FeaturedProducts/>
    </div>
  )
}

export default Home