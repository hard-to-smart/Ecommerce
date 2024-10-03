import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'

const Blogs = () => {
  const blogsData = useLoaderData()
  console.log("on blog", blogsData)
  return (
    <section id='blogs'>
      <Pagination blogs={blogsData}/>
    </section>
  )
}

export default Blogs