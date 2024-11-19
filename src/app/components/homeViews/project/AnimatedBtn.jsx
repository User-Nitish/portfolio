'use client'
import { motion } from "framer-motion";
import React from "react";

const AnimatedBtn = ({href, innerTxt}) => {


  return (
    <motion.a
        href = {href}
        className='relative border border-brand border-opacity-80 rounded-lg text-white px-4 py-2 text-lg overflow-hidden'
        target="_blank"
        initial="rest"
        whileHover="hover"
        animate="rest"
    >
        <motion.div
        className="absolute inset-0 bg-brand"
        style={{ transformOrigin: 'left center' }}
        variants={{
          rest: { scaleX: 0 },         // No fill initially
          hover: { scaleX: 1 }         // Fill on hover
        }}
        transition={{ duration: 0.3 }}
      />
        <span className="relative z-10">{innerTxt}</span>
    </motion.a>
  );
};

export default AnimatedBtn;
