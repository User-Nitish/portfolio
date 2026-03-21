'use client'
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const DownArrow = () => {

  const scrollToSection = () => {
    const section = document.getElementById('introduction');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }} // Scales up to 1.2 and back down
      transition={{
        duration: 1.5, // Controls speed of pulsing
        repeat: Infinity, // Loop the animation
        ease: "easeInOut",
      }}
      onClick={scrollToSection}
    >
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-orange-theme cursor-pointer drop-shadow-lg"
      >
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
      </svg>
    </motion.div>
  );
};

export default DownArrow;
