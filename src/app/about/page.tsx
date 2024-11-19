import React from 'react'
import Image from 'next/image'
import "../globals.css";

const page = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto max-w-7xl py-20 px-4 relative">
                <div className='color-blur absolute top-[-350px] left-[10%] h-[1000px] w-[1000px]'></div>
                  
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">About</h1>
                    <p className="text-white text-xl md:text-3xl">I'm Nitish Kumar Singh, a B.Tech CSE student at Lovely Professional University, Punjab.</p>
                    <p className="text-white text-base md:text-lg mx-auto md:mx-0">
                        Since 2023, I've enjoyed designing and developing websites both as a passion and a career choice. I completed my primary education in West Bengal and subsequently pursued my secondary and higher secondary education. I'm passionate about computer science, particularly full-stack web development and cybersecurity.
                    </p>
                    <p className="text-white text-base md:text-lg mx-auto md:mx-0">
                        A big passion of mine is working out/fitness. I try my best not to take more than one rest day a week. One day, I want to own both a fitness product & a gym, building both to improve how everyone views exercise. That's a big reason why I created my website <span className='font-bold'><span className='text-[#3175b1]'></span></span>. I want to start by improving how people track and act on their progress!
                    </p>
                    <p className='text-white text-base md:text-lg mx-auto md:mx-0'>Check out some of my blogs on <span className='font-bold'>Link<span className='text-[#3175b1]'>edin</span></span> <a href='https://www.linkedin.com/in/nitish-kr-singh1/' className='text-brand underline'>here</a> </p>
                </div>

                <div className="flex justify-center md:block">
                    <Image
                        src="/nitish.svg"
                        alt="Picture of Nitish Kumar"
                        width={500}
                        height={500}
                        className="rounded-lg hidden"
                    />
                </div>
            </div>
        </>
    )
}

export default page
