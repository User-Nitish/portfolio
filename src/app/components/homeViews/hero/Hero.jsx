import React from 'react';
import Typewriter from "./Typewriter";
import SkillShowcase from './SkillShowcase';
import DownArrow from './DownArrow'

const Hero = () => {
  
  return (
    <>
      <section className="max-w-6xl text-center py-52 mx-auto">
        <h1 className="text-5xl text-white font-bold mb-4">Hello, I am Nitish Kumar Singh</h1>
          <div className="min-w-[12ch] text-center"> 
            <Typewriter />
          </div>
          <div className='max-w-lg mx-auto mt-12'>
            <SkillShowcase />
          </div>

          <div 
          className='flex justify-center mt-12'>
            <DownArrow />
          </div>
      </section>
    </>
  );
}

export default Hero;
