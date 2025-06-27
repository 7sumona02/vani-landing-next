import { IconBrandDiscord } from "@tabler/icons-react"
import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { TextHoverEffect } from "./text-hover-effect"

const Footer = () => {
  return (
    <div className='h-fit w-screen bg-black pt-20 relative'>
        <div className='container max-w-6xl mx-auto text-white/60 border-t border-white/30 bg-white/10 backdrop-blur-sm rounded-t-2xl px-20 pt-14 pb-6 z-50 relative'>
            <div className='flex md:flex-row flex-col justify-between items-start pb-40'>
                <div className='flex md:pb-0 pb-10'>
                    <Instagram className='text-white/40 w-10' />
                    <IconBrandDiscord className='text-white/40 w-10' />
                    <Linkedin className='text-white/40 w-10' />
                </div>
                <div className='flex md:flex-row flex-col gap-20'>
                    <div>
                        <div className='text-white font-medium text-lg pb-4'>Company</div>
                        <div className='text-white/60 flex flex-col gap-2'>
                            <Link href='https://www.futurixai.com/about-us'>About</Link>
                        </div>
                    </div>
                    <div>
                        <div className='text-white font-medium text-lg pb-4'>Company</div>
                        <div className='text-white/60 flex flex-col gap-2'>
                            <div>Mayakriti</div>
                            <Link href='https://shivaay.futurixai.com/'>Shivaay</Link>
                            <Link href='https://docs.futurixai.com/'>API Docs</Link>
                        </div>
                    </div>
                    <div>
                        <div className='text-white font-medium text-lg pb-4'>Company</div>
                        <div className='text-white/60 flex flex-col gap-2'>
                            <div>Datasets</div>
                            <div>Request Datasets</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div>Privacy Policy</div>
                    <span>•</span>
                    <div>Terms & Conditions</div>
                </div>
                <div>FuturixAI & Quantum Works. All Rights Reserved</div>
            </div>   
        </div>
        <div className='absolute inset-0 md:-translate-y-[11rem] -translate-y-[26rem] blur-[1px]'>
            <TextHoverEffect text='Futurix AI' />
        </div>
    </div>
  )
}

export default Footer