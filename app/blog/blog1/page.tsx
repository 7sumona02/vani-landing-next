'use client'
import AudioPlayer from '@/components/blog/AudioPlayer'
import BlogImg from '@/components/blog/BlogImg'
import BlogSection from '@/components/blog/BlogSection'
import InfoHeader from '@/components/blog/InfoHeader'
import Quote from '@/components/blog/Quote'
import Tag from '@/components/blog/Tag'
import Title from '@/components/blog/Title'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-white'>
        <div className='container max-w-3xl mx-auto pt-[8rem]'>
            <Tag tag="Technology" />
            <Title title="How to build a website with Next.js 13" />
            <InfoHeader imgUrl="/pfp.jpg" author="Sumona" date="29 June 2025" time={2} />
            <BlogImg blogImg="/pfp.jpg" className='w-[100%]' />
            <AudioPlayer title='Podcast' audioSrc="/Havana.mp3" />
            <BlogSection title="Abstract" desc="Reward-model training is the cost bottleneck in modern Reinforcement Learning Human Feedback (RLHF) pipelines, often requiring tens of billions of parameters and an offline preference-tuning phase. In the proposed method, a frozen, instruction-tuned 7B LLM is augmented with only a one-line JSON rubric and a rank-16 LoRA adapter (affecting just 0.8% of the model's parameters), enabling it to serve as a complete substitute for the previously used heavyweight evaluation models. The plug-and-play judge achieves 96.2% accuracy on RewardBench, outperforming specialized reward networks ranging from 27B to 70B parameters. Additionally, it allows a 7B actor to outperform the top 70B DPO baseline, which scores 61.8%, by achieving 92% exact-match accuracy on GSM-8K utilizing online PPO. Thorough ablations indicate that (i) six in-context demonstrations deliver the majority of the zero-to-few-shot improvements (+2pp), and (ii) the LoRA effectively addresses the remaining disparity, particularly in the safety and adversarial Chat-Hard segments. The proposed model introduces HH-Rationales, a subset of 10,000 pairs from Anthropic HH-RLHF, to examine interpretability, accompanied by human-generated justifications. GPT-4 scoring indicates that our LoRA judge attains approximately ≈9/10 in similarity to human explanations, while zero-shot judges score around ≈5/10. These results indicate that the combination of prompt engineering and tiny LoRA produces a cost-effective, transparent, and easily adjustable reward function, removing the offline phase while achieving new state-of-the-art outcomes for both static evaluation and online RLHF." />
            <Quote quote="Vaani let us release eight-language dubs simultaneously—unheard of for an indie studio." author="Executive Producer, OTT Series" />
            <img src='/b1table.svg' className='w-3xl pt-4 pb-40' />
        </div>
    </div>
  )
}

export default page