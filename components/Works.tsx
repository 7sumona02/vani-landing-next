import { ChevronRight } from "lucide-react"

const Works = () => {
  return (
     <div className='min-h-screen w-full bg-black pb-16 relative'>
        <div className='container md:max-w-4xl w-fit mx-auto text-white/60 pt-14 relative flex flex-col gap-4'>
          <div className='pb-12 md:px-0 px-5'>
             <div className='font-bold leading-[5rem] text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide'>How it Works</div>
             <p className='text-xl text-white/60 font-semibold'>No code. No setup. Everything runs in your browser.</p>
          </div>
          <div className="flex items-center justify-end pb-6 md:px-0 px-5">Scroll <ChevronRight className="text-white/60 w-4 ml-0.5" /></div>
          <div className='md:w-full w-[20rem] overflow-x-scroll'>
            <img 
                src='/works.svg' 
                className='md:min-w-[120vw] min-w-[200vw]' 
                alt='Works illustration'
            />
            </div>
        </div>
    </div>
  )
}

export default Works