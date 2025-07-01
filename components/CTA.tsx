import React from 'react'

const CTA = () => {
  return (
    <div className='h-fit w-full bg-black pt-28 md:pb-80 pb-40 relative'>
        <div className='container max-w-6xl mx-auto text-[#e9e9e9] px-5 pt-14 pb-6 relative flex flex-col items-center gap-7'>
            <div className='md:text-5xl text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500'>Bring every Indian story to life instantly.</div>
            <div className='text-[#9f9f9f] font-medium md:text-3xl text-xl text-center'>Start with a free trial and explore the power of AI voice generation.</div>
            <div className='flex md:flex-row flex-col items-center gap-4 pt-10'>
                <button className='cursor-pointer bg-gradient-to-b from-[#938BFF] to-[#7167FF85] text-lg font-semibold rounded-lg px-6 py-2 md:w-54 w-60'>Start Creating</button>
                <button className='cursor-pointer bg-[#333333] text-lg font-semibold rounded-lg px-6 py-2 md:w-54 w-60'>Talk to Sales</button>
            </div>
        </div>
    </div>
  )
}

export default CTA