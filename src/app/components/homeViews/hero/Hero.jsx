import React from 'react';
import Typewriter from "./Typewriter";
import SkillShowcase from './SkillShowcase';
import DownArrow from './DownArrow'

const Hero = () => {
  
  return (
    <>
      <section className="w-full text-center py-32 md:py-52 relative px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hello, I am Nitish Kumar Singh
          </h1>
          <div className="min-w-[12ch] text-center mb-12"> 
            <Typewriter />
          </div>
          <div className='max-w-lg mx-auto mb-16'>
            <SkillShowcase />
          </div>

          <div className='flex justify-center'>
            <DownArrow />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
