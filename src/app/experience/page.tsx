'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { SplitText } from '../components/ui/SplitText'
import MagneticWrapper from '../components/ui/MagneticWrapper'
import "../globals.css";
import ScrollReveal from '../components/ui/ScrollReveal';

const Page = () => {
    const [selected, updateSelected] = useState('w3grads');

    return (
        <div className="bg-bgColor min-h-screen relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-theme/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brown-theme/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
                <div className="absolute top-[40%] right-[10%] w-[25%] h-[25%] bg-olive-theme/5 rounded-full blur-[80px] animate-pulse delay-1000"></div>
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32'>
                <section className='mb-24 px-4'>
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                        <div className="text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-4 mb-8"
                            >
                                <div className="h-px w-12 bg-orange-theme/30"></div>
                                <span className="text-brown-theme text-[10px] font-bold tracking-[0.4em] uppercase">Chronicle</span>
                            </motion.div>
                            <SplitText
                                text="Academic Journey"
                                className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight"
                            />
                        </div>
                        <p className="text-white/30 text-sm max-w-xs font-sans tracking-wide leading-relaxed border-l border-orange-theme/20 pl-8">
                            Tracing the educational foundations that power my technical expertise and creative approach.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative"
                    >
                        {/* Timeline Feature */}
                        <div className="relative mb-24 max-w-4xl mx-auto px-4">
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2"></div>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-theme/20 via-orange-theme to-brown-theme/20 -translate-y-1/2 origin-left shadow-[0_0_20px_rgba(255,107,53,0.3)]"
                            ></motion.div>

                            <div className="relative flex justify-between items-center">
                                {['2023 – Present', '2021 – 2023', '2020 – 2021'].map((year, i) => (
                                    <motion.div
                                        key={year}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 + i * 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="flex flex-col items-center gap-4 group"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-bgColor border-2 border-orange-theme/50 relative z-10 transition-all duration-500 group-hover:border-orange-theme group-hover:shadow-[0_0_20px_rgba(255,107,53,0.5)]">
                                            <div className="absolute inset-1 rounded-full bg-orange-theme opacity-20 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="absolute inset-0 rounded-full bg-orange-theme animate-ping opacity-0 group-hover:opacity-20"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-bgColor px-4 py-1.5 rounded-full border border-white/5 group-hover:text-orange-theme/70 group-hover:border-orange-theme/20 transition-all duration-500">{year}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* LPU Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6 group hover:border-orange-theme/30 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl p-3 flex items-center justify-center shrink-0 border border-white/5 shadow-xl">
                                        <Image src="/lpu.png" alt="LPU" width={64} height={64} className="object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif font-bold text-sm">LOVELY PROFESSIONAL UNIVERSITY</h3>
                                        <p className="text-white/40 text-[10px] uppercase tracking-wider">BTech - Computer Science and Engineering</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-white/60 text-xs leading-relaxed">📍 Phagwara, Punjab</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-orange-theme font-bold text-[10px] uppercase tracking-widest bg-orange-theme/10 px-3 py-1 rounded-full">CGPA: 8.17</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* DAV Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.1 }}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6 group hover:border-orange-theme/30 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl p-3 flex items-center justify-center shrink-0 border border-white/5 shadow-xl">
                                        <Image src="/dav.png" alt="DAV" width={64} height={64} className="object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif font-bold text-sm">D.A.V. PUBLIC SCHOOL</h3>
                                        <p className="text-white/40 text-[10px] uppercase tracking-wider">Senior Secondary - 12th Grade</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-white/60 text-xs leading-relaxed">📍 Patna, Bihar</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brown-theme font-bold text-[10px] uppercase tracking-widest bg-brown-theme/10 px-3 py-1 rounded-full">12th Grade: 64.2%</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* UP Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6 group hover:border-orange-theme/30 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl p-3 flex items-center justify-center shrink-0 border border-white/5 shadow-xl">
                                        <Image src="/up.png" alt="UP Board" width={64} height={64} className="object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif font-bold text-sm">U.P. PUBLIC SCHOOL</h3>
                                        <p className="text-white/40 text-[10px] uppercase tracking-wider">Primary & Secondary Education</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-white/60 text-xs leading-relaxed">📍 Suri, West Bengal</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-olive-theme font-bold text-[10px] uppercase tracking-widest bg-olive-theme/10 px-3 py-1 rounded-full">10th Grade: 94%</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8 pt-16 border-t border-white/5">
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-4 mb-8"
                        >
                            <div className="h-px w-12 bg-brown-theme/30"></div>
                            <span className="text-orange-theme text-[10px] font-bold tracking-[0.4em] uppercase">Professional</span>
                        </motion.div>
                        <SplitText
                            text="Work Experience"
                            className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
                        />
                    </div>
                    <p className="text-white/30 text-sm max-w-xs font-sans tracking-wide leading-relaxed border-l border-brown-theme/30 pl-8 text-left hidden md:block">
                        Transforming technical skills into impactful contributions within diverse professional environments.
                    </p>
                </div>

                <article className="max-w-5xl mx-auto py-12">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
                        <div className="space-y-4 sticky top-32">
                            {["w3grads", "fitlife", "lpu", "club"].map((job) => (
                                <MagneticWrapper key={job}>
                                    <button
                                        onClick={() => updateSelected(job)}
                                        className={clsx(
                                            "w-full text-left p-6 rounded-2xl transition-all duration-500 border",
                                            selected === job
                                                ? "bg-white/5 border-orange-theme/50 shadow-2xl shadow-orange-theme/10"
                                                : "border-transparent opacity-40 hover:opacity-100"
                                        )}
                                    >
                                        <h3 className={clsx(
                                            "text-xl font-serif font-bold mb-1",
                                            selected === job ? "text-orange-theme" : "text-white"
                                        )}>
                                            {job === "w3grads" ? "Summer Training" : job === "fitlife" ? "FitLife Project" : job === "lpu" ? "University" : "Leadership"}
                                        </h3>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                                            {job === "w3grads" ? "W3Grads" : job === "fitlife" ? "Development" : job === "lpu" ? "LPU" : "Student Organizations"}
                                        </p>
                                    </button>
                                </MagneticWrapper>
                            ))}
                        </div>

                        <div className="min-h-[600px]">
                            <JobInformation key={selected} selected={selected} />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

const JobInformation = ({ selected }) => {
    const jobData = {
        w3grads: {
            title: "Full Stack Training",
            company: "W3Grads",
            resp: [
                "Mastered the MERN stack with a focus on AI integration.",
                "Built production-ready React applications using modern best practices.",
                "Developed scalable REST APIs and managed NoSQL databases.",
                "Collaborated in Agile sprints to deliver high-quality code Features.",
                "Integrated Google Gemini AI for intelligent application behavior."
            ],
            tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Gemini AI"]
        },
        fitlife: {
            title: "FitLife Platform",
            company: "Personal Project",
            resp: [
                "Architected a comprehensive fitness and nutrition dashboard.",
                "Implemented AI-driven workout plans and meal suggestions.",
                "Built real-time tracking features for user progress.",
                "Designed a mobile-first, responsive user interface.",
                "Optimized application performance for smooth user experience."
            ],
            tools: ["React", "Express", "Node.js", "Framer Motion", "Tailwind"]
        },
        lpu: {
            title: "Computer Science Degree",
            company: "Lovely Professional University",
            resp: [
                "Maintaining high academic standards with an 8.17 CGPA.",
                "Focusing on data structures, algorithms, and system design.",
                "Participating in university-level technical competitions.",
                "Contributing to open-source student projects.",
                "Earning multiple certifications in cloud and web technologies."
            ],
            tools: ["C++", "Python", "JavaScript", "System Design", "Cloud"]
        },
        club: {
            title: "COO & President",
            company: "Student Organizations",
            resp: [
                "Leading large teams to execute high-impact campus events.",
                "Managing organizational budgets and strategic planning.",
                "Mentoring junior members in leadership and technical skills.",
                "Bridging the gap between students and industry experts.",
                "Organizing coding bootcamps and tech webinars."
            ],
            tools: ["Leadership", "Management", "Public Speaking", "Strategy"]
        }
    };

    const jobInfo = jobData[selected];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
        >
            <div className="space-y-4">
                <h2 className="text-4xl text-white font-serif font-bold">{jobInfo.title}</h2>
                <p className="text-orange-theme font-bold uppercase tracking-[0.3em] text-xs pb-4 border-b border-white/5">{jobInfo.company}</p>
            </div>

            <div className="space-y-8">
                <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">Achievements</h3>
                <ul className="space-y-6">
                    {jobInfo.resp.map((resp, i) => (
                        <motion.li
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                            className="flex gap-4 text-white/60 leading-relaxed text-lg font-sans border-l border-orange-theme/20 pl-6"
                        >
                            {resp}
                        </motion.li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6">
                <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">Technologies Wrapped</h3>
                <div className="flex flex-wrap gap-3">
                    {jobInfo.tools.map((tool, i) => (
                        <span key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold tracking-widest hover:border-orange-theme/50 transition-colors">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Page;
