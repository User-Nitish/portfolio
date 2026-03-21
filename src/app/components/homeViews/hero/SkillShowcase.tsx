'use client'
import { motion } from "framer-motion";
import React from "react";

const SkillShowcase = () => {
  const skills = ["Website Development", "Management", "UI/UX", "Accessibility", "SEO", "Leadership", "Communication", "Problem Solving"];

  return (
    <div className="overflow-hidden whitespace-nowrap flex items-center border border-orange-theme/20 max-w-full md:max-w-lg rounded-2xl py-4 px-6 bg-boxes/5 backdrop-blur-sm">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="text-sm md:text-base text-white/70 mx-4 font-medium tracking-wide">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-orange-theme rounded-full"></div>
              {skill}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillShowcase;
