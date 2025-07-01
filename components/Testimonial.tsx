import React from 'react'

const Testimonial = () => {
  return (
    <div className='h-fit w-full bg-black relative pt-20'>
        <div className="w-full relative overflow-hidden">
            <img src="/texture.png" alt="" loading="eager" decoding="async" className="w-full h-auto object-contain pointer-events-none select-none cover-object" />
            <img src="/testimonial.png" alt="" loading="eager" decoding="async" className="w-[92%] mx-auto h-auto object-contain pointer-events-none select-none cover-object absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
    </div>
  )
}

export default Testimonial