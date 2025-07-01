import React from 'react'
import UseCard from './UseCard'

const Uses = () => {
  return (
    <div className='h-fit w-full bg-black pb-36 relative'>
        <div className='container max-w-6xl mx-auto text-white/60 pb-6 relative flex flex-col gap-4'>
           <div className='font-bold pb-12  leading-[5rem] text-6xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide'>Popular Use Cases</div>
           <div className='flex md:flex-row flex-col items-center gap-8'>
                {/* <UseCard title='Advertising & IVR' subtitle='Hyper-localised radio spots and call flows' image='/u1.svg' />
                <UseCard title='Gaming' subtitle='Hyper-localised radio spots and call flows' image='/u2.svg' />
                <UseCard title='Advertising & IVR' subtitle='Hyper-localised radio spots and call flows' image='/u3.svg' /> */}
                <div className="w-full md:w-[33%] relative overflow-hidden rounded-lg" data-v-6994a189=""><img src="/card1.png" alt="" loading="eager" decoding="async" className="w-full h-auto object-contain pointer-events-none select-none" data-v-6994a189="" /><div className="absolute z-10 flex flex-col gap-4 p-6 h-full justify-start left-2 top-5" data-v-6994a189=""><span className="card-header text-left text-4xl font-medium text-white" data-v-6994a189="">E-Learning &amp; Education </span></div><div className="absolute z-10 flex flex-col gap-4 p-6 h-full justify-end left-0 bottom-2" data-v-6994a189=""><span className="card-footer text-left text-xl font-medium text-[#e9e9e9]" data-v-6994a189=""> Engaging, localized voiceovers for learning. </span></div></div>
                <div className="w-full md:w-[33%] relative overflow-hidden rounded-lg" data-v-6994a189=""><img src="/card2.png" alt="" loading="eager" decoding="async" className="w-full h-auto object-contain pointer-events-none select-none" data-v-6994a189="" /><div className="absolute z-10 flex flex-col gap-4 p-6 h-full justify-start left-2 top-5" data-v-6994a189=""><span className="card-header text-left text-4xl font-medium text-white" data-v-6994a189="">Advertising </span></div><div className="absolute z-10 flex flex-col gap-4 p-6 h-full justify-end left-0 bottom-2" data-v-6994a189=""><span className="card-footer text-left text-xl font-medium text-[#e9e9e9]" data-v-6994a189=""> Localized, impactful voiceovers for ads.</span></div></div>
                <div className="w-full md:w-[33%] relative overflow-hidden rounded-lg" data-v-6994a189=""><img src="/card3.png" alt="" loading="eager" decoding="async" className="w-full h-auto object-contain pointer-events-none select-none" data-v-6994a189="" /><div className="absolute z-10 flex flex-col gap-4 p-6 h-full justify-start left-2 top-5" data-v-6994a189=""><span className="card-header text-left text-4xl font-medium text-white" data-v-6994a189="">Content Creation </span></div><div className="absolute z-10 flex flex-col gap-4 p-6 h-full justify-end left-0 bottom-2" data-v-6994a189=""><span className="card-footer text-left text-xl font-medium text-[#e9e9e9]" data-v-6994a189=""> Hyper-localized, professional podcast voiceovers. </span></div></div>
           </div>
        </div>
    </div>
  )
}

export default Uses;