import { Card } from '@material-tailwind/react';
import { useLocation } from 'react-router-dom';

const SingleBlog = () => {
  const location = useLocation();
  const blog = location.state?.blog;


  return (
    <div id='single-blog' className='flex justify-center items-center'>
    <Card className='flex flex-row w-2/4 p-4 gap-4  bg-cyan-100 shadow-xl'>
        <div className='border-r-2 px-2'><h3 className='text-xl font-bold'>{blog.title}</h3></div>
        
        <div className='text-left text-gray-600'><p className='text-lg text-pretty'>{blog.body}</p></div>
    </Card>
    </div>
  );
};

export default SingleBlog;
