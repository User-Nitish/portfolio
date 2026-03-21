'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { UserIcon, CodeBracketIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/solid';
import { SplitText } from '../ui/SplitText';

const Introduction = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const terminalRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
      if (skillsRef.current) {
        skillsObserver.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className='w-full py-24 md:py-48 relative overflow-hidden bg-bgColor' id='introduction'>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-theme/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brown-theme/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-32">
          <div className="text-left">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-4 mb-8"
            >
                <div className="h-px w-12 bg-orange-theme/30"></div>
                <span className="text-orange-theme text-[10px] font-bold tracking-[0.4em] uppercase">Identity</span>
            </motion.div>
            <SplitText 
              text="The Digital Architect" 
              className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight"
            />
          </div>
          <p className="text-white/40 text-lg md:text-xl max-w-md ml-auto text-left lg:text-right leading-relaxed border-l lg:border-l-0 lg:border-r border-orange-theme/20 pl-8 lg:pl-0 lg:pr-8">
            I build digital experiences where clean code meets premium design. Iterate until success is not just a phrase, it's my workflow.
          </p>
        </div>

        <div className='space-y-32'>
          <div className="w-full flex justify-end">
            <div ref={terminalRef} className={`bg-black/40 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 shadow-3xl transform transition-all duration-1000 ease-[0.22,1,0.36,1] w-full ${
              isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-16 opacity-0 scale-95'
            }`}>
              {/* Terminal Header */}
              <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex space-x-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-lg shadow-red-500/20 border border-white/5"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-lg shadow-yellow-500/20 border border-white/5"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-lg shadow-green-500/20 border border-white/5"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">zsh — nitish.js</span>
                </div>
                <div className="w-12"></div> {/* Spacer for symmetry */}
              </div>
              
              <div className="relative font-mono text-sm md:text-base leading-relaxed flex">
                {/* Line Numbers Sidebar */}
                <div className="bg-white/2 px-4 py-10 text-right select-none border-r border-white/5 flex flex-col space-y-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(num => (
                    <span key={num} className="text-white/20 text-xs">{num}</span>
                  ))}
                </div>

                {/* Code Content */}
                <div className="p-10 flex-1 overflow-x-auto bg-gradient-to-br from-transparent to-orange-theme/5">
                  <div className="space-y-2">
                    <p><span className="text-orange-accent/80 italic font-medium">const</span> <span className="text-white">developer</span> = <span className="text-orange-theme">{`{`}</span></p>
                    <p className="pl-6"><span className="text-white/80">name:</span> <span className="text-brown-theme shadow-sm shadow-brown-theme/10">'Nitish Kumar Singh'</span>,</p>
                    <p className="pl-6"><span className="text-white/80">role:</span> <span className="text-brown-theme">'Full Stack Alchemist'</span>,</p>
                    <p className="pl-6"><span className="text-white/80">playground:</span> <span className="text-orange-theme">['MERN', 'AI', 'UI/UX']</span>,</p>
                    <p className="pl-6"><span className="text-white/80">philosophy:</span> <span className="text-brown-theme">'Design for the user, build for the future'</span>,</p>
                    <p className="pl-6"><span className="text-white/80">status:</span> <span className="text-orange-accent/80">'Ready to Build'</span>,</p>
                    <p className="pl-6"><span className="text-white/80 font-medium">commit:</span> <span className="text-orange-theme">(code)</span> <span className="text-white">=&gt;{` {`}</span></p>
                    <p className="pl-12"><span className="text-orange-accent/80 italic font-medium">return</span> <span className="text-white">code.quality &gt;</span> <span className="text-brown-theme">0.99</span> <span className="text-white">?</span> <span className="text-brown-theme">'Success'</span> <span className="text-white">:</span> <span className="text-brown-theme">'Refactor'</span>;</p>
                    <p className="pl-6"><span className="text-white">{`}`}</span></p>
                    <p><span className="text-orange-theme">{`}`}</span>;</p>
                    <div className="flex items-center gap-1 group/cursor mt-2">
                      <span className="text-white/40">&gt;</span>
                      <motion.div 
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2.5 h-5 bg-orange-theme shadow-lg shadow-orange-theme/50"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div ref={skillsRef} className={`space-y-16 transition-all duration-1000 ease-out ${
            skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="text-center">
                <SplitText 
                  text="Technical Prowess" 
                  className="text-white font-serif font-bold text-4xl mb-4 justify-center"
                />
                <div className="w-24 h-px bg-orange-theme/30 mx-auto"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
              <SkillContainer hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} skillsVisible={skillsVisible} />
              <FrameworkContainer hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} skillsVisible={skillsVisible} />
            </div>

            <SoftSkillsContainer skillsVisible={skillsVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal Import for motion components
import { motion } from 'framer-motion';

const SkillContainer = ({ hoveredSkill, setHoveredSkill, skillsVisible, delay = 0 }) => {
  const tech = [
    { name: "HTML", img: "/HTML.svg" },
    { name: "CSS", img: "/CSS.svg" },
    { name: "JS", img: "/JS.svg" },
    { name: "Python", img: "/PYTHON.svg" },
    { name: "C++", img: "/CPP.svg" },
    { name: "SQL", img: "/SQL.svg" }
  ];

  return (
    <div className="group relative w-full lg:w-1/2">
      <div className="relative bg-white/5 border border-white/10 p-10 rounded-2xl hover:border-orange-theme/30 transition-all duration-500">
        <h3 className="text-white font-serif font-bold text-2xl mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-orange-theme/50"></span>
            Languages
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
          {tech.map((skill, index) => (
            <SkillBox key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FrameworkContainer = ({ hoveredSkill, setHoveredSkill, skillsVisible }) => {
  const tools = [
    { name: "React", img: "/REACT.svg" },
    { name: "NextJS", img: "/NEXT.svg" },
    { name: "Node.js", img: "/NODE.svg" },
    { name: "MongoDB", img: "/MONGO.svg" },
    { name: "Tailwind", img: "/TAILWIND.svg" },
    { name: "Figma", img: "/FIGMA.svg" }
  ];

  return (
    <div className="group relative w-full lg:w-1/2">
      <div className="relative bg-white/5 border border-white/10 p-10 rounded-2xl hover:border-brown-theme/30 transition-all duration-500">
        <h3 className="text-white font-serif font-bold text-2xl mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-brown-theme/50"></span>
            Frameworks
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((skill, index) => (
            <SkillBox key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SoftSkillsContainer = ({ skillsVisible }) => {
  const softSkills = [
    { name: "Creative Problem Solving", desc: "Finding elegant solutions to complex challenges." },
    { name: "Team Collaboration", desc: "Thriving in diverse environments and collective brainstorming." },
    { name: "Leadership", desc: "Motivating teams and orchestrating projects with vision and purpose." },
    { name: "Strategic Thinking", desc: "Planning for scalability and long-term impact." },
    { name: "Adaptability", desc: "Rapidly mastering new technologies and paradigms." },
    { name: "Effective Communication", desc: "Articulating complex technical concepts with clarity and precision." },
    { name: "Time Management", desc: "Optimizing workflows to deliver high-quality results within deadlines." },
    { name: "Critical Analysis", desc: "Evaluating data and requirements to inform sound architectural decisions." }
  ];

  return (
    <div className={`mt-24 transition-all duration-1000 delay-300 ease-out ${
      skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    }`}>
      <div className="text-center mb-16">
        <SplitText 
          text="Soft Skills" 
          className="text-white font-serif font-bold text-4xl md:text-5xl mb-6 justify-center"
        />
        <div className="w-24 h-px bg-brown-theme/40 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {softSkills.map((skill, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -12, scale: 1.02 }}
            className="bg-white/[0.03] border border-white/10 p-10 rounded-3xl hover:border-orange-theme/50 transition-all duration-500 group relative overflow-hidden shadow-2xl hover:shadow-orange-theme/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-theme/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h4 className="text-orange-theme font-serif font-bold text-xl mb-4 relative z-10">{skill.name}</h4>
            <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors relative z-10 font-sans">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SkillBox = ({ skill }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/5"
  >
    <Image src={skill.img} alt={skill.name} width={32} height={32} className="opacity-60 group-hover:opacity-100 transition-opacity" />
    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{skill.name}</span>
  </motion.div>
);

export default Introduction;
