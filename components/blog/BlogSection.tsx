import React from 'react'

const BlogSection = ({ title, desc }: { title?: string, desc: string }) => {
  return (
    <div className='flex flex-col gap-6 pt-4 pb-10'>
        <div className='text-2xl font-medium'>{title}</div>
        <div className='text-lg text-justify'>{desc}</div>
    </div>
  )
}

export default BlogSection