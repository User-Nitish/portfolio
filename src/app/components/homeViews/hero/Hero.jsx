'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SplitText } from '../../ui/SplitText';
import Typewriter from './Typewriter';
import SkillShowcase from './SkillShowcase';
import DownArrow from './DownArrow';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="bg-bgColor min-h-screen relative overflow-hidden flex flex-col justify-center">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        x: mousePosition.x * -0.05,
                        y: mousePosition.y * -0.05,
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-theme/10 rounded-full blur-[150px] animate-pulse"
                ></motion.div>
                <motion.div
                    animate={{
                        x: mousePosition.x * 0.03,
                        y: mousePosition.y * 0.03,
                    }}
                    className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-brown-theme/5 rounded-full blur-[120px] animate-pulse delay-700"
                ></motion.div>
                <div className="absolute inset-0 bg-[url('/newbg.png')] bg-cover bg-center opacity-15 mix-blend-screen"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]"></div>
            </div>

            <section className="relative z-10 w-full px-6 lg:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="text-left py-12 lg:py-24">
                        <div className="max-w-2xl">
                            <SplitText
                                text={"Hello, I am Nitish\nKumar Singh"}
                                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 justify-start bg-gradient-to-r from-orange-theme via-orange-accent to-brown-theme bg-clip-text text-transparent italic leading-[1.3] pb-4"
                            />
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-white/60 text-lg md:text-xl font-sans mb-12 tracking-wide leading-relaxed"
                            >
                                Full Stack Developer & AI Enthusiast crafting seamless digital experiences with clean code and premium design.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                            className='mb-16 flex flex-wrap justify-start gap-4'
                        >
                            <SkillShowcase />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className='max-w-full md:max-w-lg flex justify-center'
                        >
                            <DownArrow />
                        </motion.div>
                    </div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative hidden lg:flex justify-center items-center"
                    >
                        <div className="relative w-full max-w-[450px] aspect-square group">
                            <motion.div
                                animate={{
                                    borderRadius: [
                                        "30% 70% 70% 30% / 30% 30% 70% 70%",
                                        "58% 42% 75% 25% / 76% 46% 54% 24%",
                                        "67% 33% 47% 53% / 37% 48% 52% 63%",
                                        "30% 70% 70% 30% / 30% 30% 70% 70%"
                                    ]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-x-0 inset-y-0 bg-orange-theme/20 blur-3xl group-hover:bg-orange-theme/40 transition-all duration-700"
                            ></motion.div>

                            <motion.div
                                animate={{
                                    borderRadius: [
                                        "30% 70% 70% 30% / 30% 30% 70% 70%",
                                        "58% 42% 75% 25% / 76% 46% 54% 24%",
                                        "67% 33% 47% 53% / 37% 48% 52% 63%",
                                        "30% 70% 70% 30% / 30% 30% 70% 70%"
                                    ]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative z-10 w-full h-full overflow-hidden border-2 border-white/10 group-hover:border-orange-theme/50 transition-colors duration-500 shadow-[0_0_50px_rgba(255,107,53,0.1)]"
                            >
                                <motion.div
                                    animate={{
                                        x: (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * 0.02,
                                        y: (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * 0.02,
                                    }}
                                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                                    className="w-full h-full relative"
                                >
                                    <Image
                                        src="/me.jpeg"
                                        alt="Nitish Kumar Singh"
                                        fill
                                        className="object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-700 mix-blend-screen"
                                        priority
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brown-theme/10 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-theme/5 rounded-full blur-lg animate-pulse delay-700"></div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
