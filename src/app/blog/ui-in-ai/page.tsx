import React from 'react'
import { ClockIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import "../../globals.css"

const page = () => {
  return (
    <>
     <div className='p-16'>
     <div className='color-blur-spotify absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]'></div>
      <section className='space-y-12'>
        <div className='space-y-4'>
          <p className='text-sm text-white'>UI/UX & AI</p>
          <h1 className='text-4xl text-white max-w-4xl'>How to Design UI/UX for AI Services and Products</h1>
          <div className='flex gap-4'>
            <ClockIcon className='w-5 h-5 text-white'/>
            <p className='text-sm text-white'>5 min read</p>
          </div>
        </div>
        
        <p className='text-[#d1d5db] max-w-4xl'>With the boom of AI products, we must think to ourselves, how do we make these products useful to all?
          We have to emphasize both transparency and seamless interaction to ensure users understand and feel in control when using AI services.
        </p>
      </section>
      <Image 
      src = "/ui-blog.webp"
      alt='UI design graphic'
      width={700}
      height={100}
      className='mt-4'
      />
      <section className='space-y-6'>
        <div className='max-w-4xl space-y-6 mt-4'>
          <h2 className="text-3xl text-white">How Important is UI/UX in AI</h2>
          <p className='text-[#d1d5db]'>AI applications have exploded in the past two years, so we don't have much research to define the most optimal UX 
            when using these products. When we look at UI/UX for a website, we focus on navigation and the layout of the website to convert
            and create a smooth process. When a user uses an AI application, the output from the application is solely based on the user's input and learning algorithms.
            This means we need to design our applications to help users understand why the AI behaves in certain ways, under different inputs. 
          </p>
          <p className='text-[#d1d5db]'>
            Not only do we have to worry about usability, but we also need to improve and maintain transparency between the product and the user. Using an AI tool "correctly" can be
            unpredictable and complex. We can improve transparency by giving the user options like control mechanisms to adjust the AI-driven recommendations.
            The logic of the output an AI tool provides isn't always visible, which can further contribute to the lack of trust in the tool.
          </p>
          <p className='text-[#d1d5db]'>
            To sum it up, we need the user to understand how the AI gets to their output based on the type of input they provide. The process from start to finish should
            be clear based on the UI the user can to see. Let's go through a few ways to address some of these challenges we spoke about above.
          </p>
        </div>
        <div className='max-w-4xl space-y-6 mt-4'>
        <h2 className="text-3xl text-white">Key Principles for Effective AI UI/UX Design</h2>
        <h3 className='text-2xl text-white'>Show, Don't Tell</h3>
        <p className='text-[#d1d5db]'>Rather than the user giving input and just getting output, allow the user to see how this input was achieved. We don't need to
          show the intense ML algorithms, but things like explanations of recommendations and visualizations of key data factors may be helpful
          to see. A simple button titled "Why this suggestion" can provide insight into how the AI got to this output. This will increase both usability
          and transparency between the AI and the user.
        </p>
        <h3 className='text-2xl text-white'>Empower the User</h3>
        <p className='text-[#d1d5db]'>AI applications should allow the user to customize or influence the outcomes, allowing the user to tailor 
          their use of the application. Providing control settings such as filters or adjustment options for predictive features can help the user feel more
          in charge. Thus, leading to more transparency between the model and the user.
        </p>
        <h3 className='text-2xl text-white'>Learn and Improve with the User</h3>
        <p className='text-[#d1d5db]'>Allow the user to give feedback and make suggestions as to how the AI responds. This allows the model to feel more
          interactive and gives the user a greater sense of influence. This is very important in applications that use chat, as the model should learn and understand
          what works and doesn't work for the user.
        </p>
        </div>
        <div className='max-w-4xl space-y-6 mt-4'>
        <h2 className="text-3xl text-white">Conclusion</h2>
        <p className='text-[#d1d5db]'>Creating a great UI/UX for AI is more than aesthetics, it's about creating an experience that allows the user to understand and trust the model.
          As AI continues to get faster and more intelligent, thoughtful design will play a massive role in how much the user can take advantage of these great tools.
        </p>
        </div>
      </section>

        
    </div>
    </>
   
  )
}

export default page
