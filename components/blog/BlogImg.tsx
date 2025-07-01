import React from 'react'

const BlogImg = ({blogImg, className}: {blogImg: string, className: string}) => {
  return (
    <div className='py-8'>
        <img src={blogImg} className={`${className} rounded-md`} alt='blog img' />
    </div>
  )
}

export default BlogImg