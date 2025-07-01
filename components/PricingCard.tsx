import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BenefitProps {
  text: string
  checked: boolean
}

const Benefit = ({ text, checked }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-4 place-content-center rounded-full bg-primary border text-sm border-[#e9e9e9]/60">
          <Check className="size-3 text-[#e9e9e9]" />
        </span>
      ) : (
        <span className="grid size-4 place-content-center rounded-full dark:bg-zinc-800 bg-zinc-200 text-sm dark:text-zinc-400 text-zinc-600">
          <X className="size-3" />
        </span>
      )}
      <span className="text-sm text-[#e9e9e9]">{text}</span>
    </div>
  )
}

interface PricingCardProps {
  tier: string
  price: string
  bestFor: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean }>
  className?: string
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
    >
      <Card
        className={cn(
          "relative h-full md:w-[360px] w-[320px] overflow-hidden border",
          "border-white/20 bg-gradient-to-br from-black/80 to-neutral-800",
          "p-6",
          className,
        )}
      >
        <div className="flex flex-col items-start pb-4 border-b border-white/30 text-[#e9e9e9]">
          <span className="mb-4 text-lg font-semibold dark:text-zinc-50 flex flex-col-reverse items-start gap-3">
            {tier}
            {tier === "Pro Tier" && (
              <img 
                src="/pro.svg" // Update this path
                alt="Pro badge"
                className="inline-block"
              />
            )}
          </span>
          <span className="mb-3 inline-block text-4xl font-medium">
            {price}
            <span className="text-lg ml-1 text-[#e9e9e9]/70">/month</span>
          </span>
          <span className="dark:bg-gradient-to-br dark:from-zinc-200 dark:to-zinc-500 bg-gradient-to-br from-white/50 to-neutral-400 bg-clip-text text-transparent">
            {bestFor}
          </span>
        </div>
        <span className="mb-1 text-[#e9e9e9]">
            Monthly Credits
        </span>
        <div className="space-y-4 pb-9 -mt-3">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
        <Button
          className="w-full"
          variant={tier === "Pro Tier" ? "pro" : "default"}
        >
          {CTA}
        </Button>
      </Card>
    </motion.div>
  )
}
