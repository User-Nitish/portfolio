'use client'
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordSpacing?: number;
}

export const SplitText = ({ text, className = "", delay = 0, wordSpacing = 5 }: SplitTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", paddingBottom: "20px" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {text.split("\n").map((line, lineIndex) => (
        <div key={lineIndex} className="flex flex-wrap w-full">
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              variants={child}
              style={{ marginRight: `${wordSpacing}px` }}
              key={`${lineIndex}-${wordIndex}`}
            >
              {word}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};
