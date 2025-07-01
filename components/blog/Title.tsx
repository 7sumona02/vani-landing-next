import React from 'react'

const Title = ({ title }: { title: string }) => {
  return (
    <div className='text-4xl font-semibold py-8'>{title}</div>
  )
}

export default Title