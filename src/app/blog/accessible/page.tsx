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
          <p className='text-sm text-white'>Being a Student Club President</p>
          <h1 className='text-4xl text-white max-w-4xl'>My Experience abot handling the club</h1>
          <div className='flex gap-4'>
            <ClockIcon className='w-5 h-5 text-white'/>
            <p className='text-sm text-white'>5 min read</p>
          </div>
        </div>
        
        <p className='text-[#d1d5db] max-w-4xl'>In today's world, to grow your connections , make your personality unique and for the personal growth ,what one can do is join a student organization of your interest to get the maximum out of you 
        </p>
      </section>
      <Image 
      src = "/acc-image.jpg"
      alt='UI design graphic'
      width={700}
      height={100}
      className='mt-4'
      />
      <section className='space-y-6'>
        <div className='max-w-4xl space-y-6 mt-4'>
          <h2 className="text-3xl text-white">Semantic HTML</h2>
          <p className='text-[#d1d5db]'>Introduced in 2014 with HTML5, semantic HTML is HTML code that uses tags effectively to describe the purpose
            of different elements. Some of these tags include &lt;header&gt;, &lt;footer&gt;, all  &lt;h&gt; tags, and the  &lt;p&gt; tag. These tags tell both the
            humans and browsers its purpose, allowing both web browsers and assistive technology to navigate your site better. 
          </p>
          <p className='text-[#d1d5db]'>
            There are also non-semantic HTML elements, which include the  &lt;div&gt; tag and the  &lt;span&gt; tag. These tags give no information to the computer
            as to why they are there. These tags should only be used for styling purposes, we should try to be as semantic as we can.
          </p>
        </div>
        <div className='max-w-4xl space-y-6 mt-4'>
        <h2 className="text-3xl text-white">Provide Text Alternatives</h2>
        <p className='text-[#d1d5db]'>Whenever you create an image in your HTML code, you will notice the "alt" tag as one of the attributes. This 3 - 4 word
            attribute describes what the image is. If you have a person riding a bike, the alt tag could simply be "man riding a bike". This once again is another element
            that allows people with assistive technologies to use your site. Once the technology gets to your image, they will read out loud what your alt tag is. Never make
            an image without an alt tag!
        </p>
        </div>
        <div className='max-w-4xl space-y-6 mt-4'>
        <h2 className="text-3xl text-white">Ensure Good Color Contrast</h2>
        <p className='text-[#d1d5db]'> When creating designs for your site, make sure you have a high color contrast, as this can improve readability for people
          with low vision or color blindness. There are a few tools online that you can use to test your designs, I use <a href = "https://webaim.org/resources/contrastchecker/" className='text-brand underline'>WebAIM's Contrast Checker</a> when checking my color choices.
        </p>
        </div>
        <div className='max-w-4xl space-y-6 mt-4'>
        <h2 className="text-3xl text-white">Keyboard Navigation</h2>
        <p className='text-[#d1d5db]'> All assistive technologies rely on you correctly setting up your keyboard navigation to allow the software to flow through
          the site properly. All of your interactive elements such as links and forms should all be accessible through the use of only your keyboard. Many users also prefer
          to navigate the web with the keyboard as well. The use of uncommon browsers such as on a video game console also relies on the use of keyboard accessibility.
        </p>
        </div>
      </section>

        
    </div>
    </>
   
  )
}

export default page
