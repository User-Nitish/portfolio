'use client'
import { motion } from "framer-motion";
import React from "react";

const AnimatedBtn = ({href, innerTxt, variant = "primary"}) => {
  const isPrimary = variant === "primary";
  
  return (
    <motion.a
        href={href}
        className={`relative rounded-xl text-white px-8 py-3 text-xs font-sans font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 ${
          isPrimary 
            ? 'bg-gradient-to-r from-orange-theme to-brown-theme border border-white/10 shadow-2xl shadow-orange-theme/20' 
            : 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500'
        }`}
        target="_blank"
        rel="noopener noreferrer"
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        animate="rest"
    >
        {/* Themed background active state */}
        <motion.div
            className={`absolute inset-0 ${
              isPrimary 
                ? 'bg-gradient-to-r from-brown-theme to-orange-theme' 
                : 'bg-gradient-to-r from-white/10 to-transparent'
            }`}
            style={{ transformOrigin: 'center' }}
            variants={{
              rest: { scaleX: 0, scaleY: 0 },
              hover: { scaleX: 1, scaleY: 1 }
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        />
        
        {/* Subtle glow effect */}
        <motion.div
            className={`absolute inset-0 ${
              isPrimary 
                ? 'bg-orange-theme/20 blur-xl' 
                : 'bg-white/5 blur-xl'
            }`}
            variants={{
              rest: { opacity: 0, scale: 0.8 },
              hover: { opacity: 1, scale: 1.2 }
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        />
        
        {/* Vintage icon */}
        <motion.div
            className="absolute left-3 flex items-center justify-center"
            variants={{
              rest: { x: -10, opacity: 0 },
              hover: { x: 0, opacity: 1 }
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
        >
          {isPrimary ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
              <path d="M5 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-2a1 1 0 10-2 0v2H5V7h2a1 1 0 000-2H5z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4.12 1.417a1 1 0 11-.633-1.265l4.12-1.417zM1.421 4.03a1 1 0 00-.633 1.265l4.12 1.417a1 1 0 00.633-1.265l-4.12-1.417zm5.474 4.12a1 1 0 00-.633 1.264l4.12 1.417a1 1 0 00.633-1.264l-4.12-1.417zm3.895 2.526a1 1 0 00-.633 1.264l4.12 1.417a1 1 0 00.633-1.264l-4.12-1.417z" clipRule="evenodd"/>
            </svg>
          )}
        </motion.div>
        
        {/* Button text */}
        <span className="relative z-10 pl-6 pr-2">{innerTxt}</span>
        
        {/* Vintage arrow indicator */}
        <motion.div
            className="absolute right-3"
            variants={{
              rest: { x: 5, opacity: 0 },
              hover: { x: 0, opacity: 1 }
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </motion.div>
    </motion.a>
  );
};

export default AnimatedBtn;
