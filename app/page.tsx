'use client'
import { AnimatedTabs } from "@/components/AnimTabs";
import Beats from "@/components/Beats";
import Choose from "@/components/Choose";
import Choose1 from "@/components/Choose1";
import CTA from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Uses from "@/components/Uses";
import Works from "@/components/Works";

const tabs = [
  { label: "Home", value: "home" },
  { label: "About", value: "about" },
  { label: "Contact", value: "contact" }
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-black flex flex-col md:px-0 px-5 md:pt-56 pt-40">
      <div className="container max-w-7xl mx-auto">
        <main className="flex flex-col items-center gap-6">
          <div className="-space-y-4">
             <div className='md:text-[6rem] font-semibold pb-12 md:leading-[6.5rem] text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 text-center'>Vaanika India&apos;s <br className='hidden md:block' /> Voice AI Studio</div>
             <p className='text-xl text-white/60 max-w-2xl text-center'>Studio-quality speech, effortless multilingual dubbing, and cinematic soundscapes already in 7 + Indian languages, with more on the way.</p>
          </div>
          <div className="w-full max-w-4xl pt-20">
            <AnimatedTabs tabs={tabs} />
          </div> 
          <div>
            <Choose1 />
          </div>
          <div>
            <Beats />
          </div>
           <div>
            <Works />
          </div>
          <div>
            <Uses />
          </div>
          <div>
            <Pricing />
          </div>
          <div>
            <Testimonial />
          </div>
          <div>
            <FAQ />
          </div>
          <div>
            <CTA />
          </div>
          <div>
            <Footer />
          </div>
        </main>
       
      </div>
    </div>
  );
}