import { PricingCard } from "./PricingCard"

const Pricing = () => {
  return (
     <div className='h-fit w-full bg-black relative'>
        <div className='container max-w-6xl mx-auto text-white/60 pb-10 relative flex flex-col gap-4'>
           <div className='font-bold pb-12  leading-[5rem] text-6xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide'>Pricing</div>
               <section className="relative overflow-hidden text-foreground">
                <div className="relative">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <PricingCard
                      tier="Free Tier"
                      price="$0"
                      bestFor=""
                      CTA="Get Started"
                      benefits={[
                        { text: "10 hr TTS", checked: true },
                        { text: "2 hr dubbing", checked: true },
                        { text: "250 SFX", checked: true },
                      ]}
                      className="rounded-3xl"
                    />
                    <PricingCard
                      tier="Pro Tier"
                      price="$20"
                      bestFor=""
                      CTA="Get Started"
                      benefits={[
                        { text: "30 min TTS", checked: true },
                        { text: "10 min dubbing", checked: true },
                        { text: "25 SFX", checked: true },
                      ]}
                      className="rounded-3xl"
                    />
                    <PricingCard
                      tier="Creator Tier"
                      price="$5"
                      bestFor=""
                      CTA="Contact us"
                      benefits={[
                        { text: "Custom", checked: true },
                      ]}
                      className="rounded-3xl"
                    />
                  </div>
                </div>
              </section>
        </div>
    </div>
  )
}

export default Pricing