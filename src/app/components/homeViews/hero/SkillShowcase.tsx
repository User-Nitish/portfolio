'use client'
import { motion } from "framer-motion";
import React from "react";

const SkillShowcase = () => {
  const skills = ["Website Development", "Management", "UI/UX", "Accessibility", "SEO"];

  return (
    <div className="overflow-hidden whitespace-nowrap flex items-center border border-brand border-opacity-15 max-w-full md:max-w-lg rounded-lg py-3 px-4">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }} // Slowed down slightly for readability
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="text-sm md:text-base text-white mx-2 md:mx-4">
            <div className="flex items-center gap-2">
              <div className="w-[4px] h-[4px] md:w-[5px] md:h-[5px] bg-brand rounded-full"></div>
              {skill}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillShowcase;
