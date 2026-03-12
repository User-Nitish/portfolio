'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { UserIcon, CodeBracketIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/solid';


const Introduction = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className='w-full py-24 md:py-32 relative overflow-hidden' id='introduction'>
      {/* Professional Minimalist Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-cyan-500/5"></div>
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/10 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <UserIcon className="text-brand w-8 h-8" />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-brand to-transparent"></div>
            <span className="text-brand text-sm font-semibold tracking-wider uppercase">About Me</span>
            <div className="h-px w-24 bg-gradient-to-r from-brand via-transparent to-transparent"></div>
            <UserIcon className="text-brand w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-8 font-bold">
            A bit about me
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate developer crafting innovative solutions with cutting-edge technologies
          </p>
        </div>

        <div className='space-y-16'>
          {/* Enhanced Introduction Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 max-w-6xl mx-auto">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CodeBracketIcon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Introduction</h3>
              </div>
              
              <div className="space-y-6 text-white/90 text-lg md:text-xl leading-relaxed">
                <div className="relative pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-500/60 transition-colors duration-300">
                  <p className="mb-2">
                    <span className="text-cyan-400 font-semibold">I'm Nitish Kumar Singh</span>, a third-year B.Tech CSE student with a deep passion for technology and innovation. I'm driven by the endless possibilities that digital systems and intelligent applications bring to everyday life.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-purple-500/30 hover:border-purple-500/60 transition-colors duration-300">
                  <p className="mb-2">
                    My technical skills center around <span className="text-purple-400 font-semibold">Full Stack Web Development and Artificial Intelligence</span>, with hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js). I create interactive and responsive web applications, working seamlessly across both frontend and backend to deliver smooth user experiences.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500/60 transition-colors duration-300">
                  <p className="mb-2">
                    In addition to MERN, I have practical knowledge of <span className="text-blue-400 font-semibold">PHP</span>, which I use for backend development and server-side scripting. Coupled with my ability to work with relational databases like MySQL, it broadens my versatility as a developer.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-green-500/30 hover:border-green-500/60 transition-colors duration-300">
                  <p className="mb-2">
                    I also have a strong foundation in <span className="text-green-400 font-semibold">Data Structures and Algorithms (DSA)</span> using C++, which enhances my algorithmic thinking and problem-solving skills. Alongside this, I also hold basic knowledge of Java Programming language.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-orange-500/30 hover:border-orange-500/60 transition-colors duration-300">
                  <p className="mb-2">
                    Over the course of my academic journey, I've built a variety of projects—from dynamic websites and RESTful APIs to data-driven applications. I prioritize <span className="text-orange-400 font-semibold">clean coding practices</span>, logical structuring, and optimizing performance.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-pink-500/30 hover:border-pink-500/60 transition-colors duration-300">
                  <p>
                    A believer in <span className="text-pink-400 font-semibold">continuous growth</span>, I actively explore new technologies and engage with developer communities. I'm enthusiastic about contributing to impactful projects and learning through hands-on challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-3">
                <SparklesIcon className="text-cyan-400 w-6 h-6 animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Skills</h3>
                <SparklesIcon className="text-cyan-400 w-6 h-6 animate-pulse" />
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
              <SkillContainer hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
              <FrameworkContainer hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

const SkillContainer = ({ hoveredSkill, setHoveredSkill }) => {
  const tech = [
    { name: "HTML", img: "/HTML.svg", color: "from-orange-500 to-red-500" },
    { name: "CSS", img: "/CSS.svg", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", img: "/JS.svg", color: "from-yellow-500 to-amber-500" },
    { name: "TypeScript", img: "/TYPESCRIPT.svg", color: "from-blue-600 to-blue-400" },
    { name: "Python", img: "/PYTHON.svg", color: "from-green-500 to-emerald-500" },
    { name: "Java", img: "/JAVA.svg", color: "from-red-600 to-orange-600" },
    { name: "SQL", img: "/SQL.svg", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl max-w-md shadow-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-1">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <CodeBracketIcon className="text-cyan-400 w-6 h-6" />
          <h3 className="text-2xl font-bold text-white text-center">Programming Languages</h3>
          <CodeBracketIcon className="text-cyan-400 w-6 h-6" />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {tech.map((skill, index) => (
            <SkillBox key={index} skill={skill} hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FrameworkContainer = ({ hoveredSkill, setHoveredSkill }) => {
  const tools = [
    { name: "React", img: "/REACT.svg", color: "from-cyan-500 to-blue-500" },
    { name: "NextJS", img: "/NEXT.svg", color: "from-gray-800 to-gray-600" },
    { name: "Express", img: "/EXPRESS.svg", color: "from-green-600 to-green-400" },
    { name: "MongoDB", img: "/MONGO.svg", color: "from-green-500 to-emerald-500" },
    { name: "Node.js", img: "/NODE.svg", color: "from-green-600 to-green-500" },
    { name: "Tailwind", img: "/TAILWIND.svg", color: "from-cyan-500 to-teal-500" },
    { name: "PHP", img: "/PHP.svg", color: "from-purple-600 to-indigo-600" },
    { name: "MySQL", img: "/MYSQL.svg", color: "from-blue-500 to-cyan-500" },
    { name: "C++", img: "/CPP.svg", color: "from-blue-600 to-blue-400" },
    { name: "Figma", img: "/FIGMA.svg", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl max-w-5xl shadow-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-1">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <SparklesIcon className="text-purple-400 w-6 h-6" />
          <h3 className="text-2xl font-bold text-white text-center">Frameworks & Tools</h3>
          <SparklesIcon className="text-purple-400 w-6 h-6" />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((skill, index) => (
            <SkillBox key={index} skill={skill} hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillBox = ({ skill, hoveredSkill, setHoveredSkill }) => (
  <div 
    className="group relative"
    onMouseEnter={() => setHoveredSkill(skill.name)}
    onMouseLeave={() => setHoveredSkill(null)}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
    <div className="relative flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-4 w-[100px] md:w-[110px] h-[100px] md:h-[110px] text-center shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 hover:border-white/40">
      <div className="relative">
        <Image src={skill.img} alt={skill.name} width={35} height={35} className="mb-3 transition-transform duration-300 group-hover:scale-125" />
        {hoveredSkill === skill.name && (
          <StarIcon className="absolute -top-2 -right-2 text-yellow-400 w-4 h-4 animate-spin" />
        )}
      </div>
      <p className="text-white text-sm md:text-base truncate font-semibold">{skill.name}</p>
    </div>
  </div>
);

export default Introduction;
