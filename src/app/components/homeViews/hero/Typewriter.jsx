'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LETTER_DELAY = 0.1; // Adjusted for better visibility
const BOX_FADE_DURATION = 0.125;
const SWAP_DELAY_IN_MS = 5500;

const Typewriter = () => {
  const [exampleIndex, setExampleIndex] = useState(0);

  const adjectives = [
    "Web Developer",
    "Scholar",
    "Gymrat"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [adjectives.length]);

  return (
    <div>
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand">
        {adjectives[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: i * LETTER_DELAY,
              duration: 0.3,
            }}
            className="relative"
            key={`${exampleIndex}-${i}`}
          >
            {l}
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[2px] left-[1px] right-0 top-[2px] bg-white"
            />
          </motion.span>
        ))}
      </p>
    </div>
  );
};

export default Typewriter;
