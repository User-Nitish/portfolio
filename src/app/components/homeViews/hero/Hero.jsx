'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from "./Typewriter";
import SkillShowcase from './SkillShowcase';
import DownArrow from './DownArrow'

const Hero = () => {
  
  return (
    <>
      <section className="w-full text-center py-32 md:py-52 relative px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"
        ></motion.div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl text-white font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Hello, I am Nitish Kumar Singh
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="min-w-[12ch] text-center mb-12"
          > 
            <Typewriter />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className='max-w-lg mx-auto mb-16'
          >
            <SkillShowcase />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className='flex justify-center'
          >
            <DownArrow />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
