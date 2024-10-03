import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  const blogsData = useLoaderData()
  console.log("on blog", blogsData)
  return (
    <section id='blogs'>
      <div className='flex flex-wrap gap-2'>
        {blogsData.map((blog)=>{
         return <BlogCard key={blog.id}/>
        })}
      </div>
    </section>
  )
}

export default Blogs