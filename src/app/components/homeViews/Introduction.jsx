'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { UserIcon, CodeBracketIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/solid';


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
          <div className="max-w-3xl mx-auto">
            <div ref={terminalRef} className={`bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl shadow-black/50 transform transition-all duration-1000 ease-out w-full ${
              isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-20 opacity-0 scale-95'
            }`}>
              {/* Enhanced terminal header with tabs */}
              <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
                <div className="flex items-center px-2 pt-1">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-all duration-200 cursor-pointer hover:scale-110"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-all duration-200 cursor-pointer hover:scale-110"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-all duration-200 cursor-pointer hover:scale-110"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-gray-950 rounded-t-lg px-3 py-0.5">
                      <span className="text-gray-400 text-xs font-mono">introduction.js</span>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs font-mono px-2">UTF-8 | JavaScript</div>
                </div>
                
                {/* File tabs */}
                <div className="flex bg-gray-950 border-b border-gray-800">
                  <div className="bg-gray-800 px-3 py-1 text-xs font-mono text-white border-r border-gray-700 flex items-center space-x-2">
                    <span>📄</span>
                    <span>introduction.js</span>
                    <span className="text-gray-500 hover:text-gray-300 cursor-pointer">×</span>
                  </div>
                  <div className="px-3 py-1 text-xs font-mono text-gray-500 hover:text-gray-300 cursor-pointer flex items-center space-x-2">
                    <span>📄</span>
                    <span>mindset.md</span>
                  </div>
                  <div className="px-3 py-1 text-xs font-mono text-gray-500 hover:text-gray-300 cursor-pointer flex items-center space-x-2">
                    <span>📄</span>
                    <span>status.json</span>
                  </div>
                </div>
              </div>
              
              {/* Terminal content with enhanced features */}
              <div className="flex">
                {/* Enhanced line numbers */}
                <div className="bg-gray-950 px-2 py-3 text-gray-600 text-xs font-mono select-none border-r border-gray-800">
                  <div className="hover:bg-gray-800 px-1 rounded">1</div>
                  <div className="hover:bg-gray-800 px-1 rounded">2</div>
                  <div className="hover:bg-gray-800 px-1 rounded">3</div>
                  <div className="hover:bg-gray-800 px-1 rounded">4</div>
                  <div className="hover:bg-gray-800 px-1 rounded">5</div>
                  <div className="hover:bg-gray-800 px-1 rounded">6</div>
                  <div className="hover:bg-gray-800 px-1 rounded">7</div>
                  <div className="hover:bg-gray-800 px-1 rounded">8</div>
                  <div className="hover:bg-gray-800 px-1 rounded">9</div>
                  <div className="hover:bg-gray-800 px-1 rounded">10</div>
                  <div className="hover:bg-gray-800 px-1 rounded">11</div>
                  <div className="hover:bg-gray-800 px-1 rounded">12</div>
                  <div className="hover:bg-gray-800 px-1 rounded">13</div>
                  <div className="hover:bg-gray-800 px-1 rounded">14</div>
                  <div className="hover:bg-gray-800 px-1 rounded">15</div>
                  <div className="hover:bg-gray-800 px-1 rounded">16</div>
                  <div className="hover:bg-gray-800 px-1 rounded">17</div>
                  <div className="hover:bg-gray-800 px-1 rounded">18</div>
                </div>
                
                <div className="flex-1 p-1 font-mono text-xs">
                  <div>
                    <span className="text-cyan-400">$</span>
                    <span className="text-gray-300 ml-2">npm run dev:whoami</span>
                  </div>
                  
                  <div className="text-gray-500">
                    <span className="text-green-400">✓</span> <span className="text-gray-400">Loading developer profile...</span>
                  </div>
                  
                  <div className="text-gray-300">
                    <p><span className="text-purple-400 font-semibold">export</span> <span className="text-blue-400 font-semibold">default</span> <span className="text-cyan-400 font-semibold">class</span> <span className="text-green-400 font-semibold">Developer</span> <span className="text-purple-400 font-semibold">{`{`}</span></p>
                    <p className="ml-4"><span className="text-blue-400 font-semibold">constructor</span>() {`{`}</p>
                    <p className="ml-8"><span className="text-gray-500">/**</span></p>
                    <p className="ml-8"><span className="text-gray-500"> * Initialize developer with core values</span></p>
                    <p className="ml-8"><span className="text-gray-500"> * @param {'{'}Object{'}'} config - Developer configuration</span></p>
                    <p className="ml-8"><span className="text-gray-500"> */</span></p>
                    <p className="ml-8"><span className="text-purple-400">super</span>();</p>
                    <p className="ml-8"><span className="text-purple-400">this.name</span> = <span className="text-green-400">'Nitish Kumar Singh'</span>;</p>
                    <p className="ml-8"><span className="text-purple-400">this.philosophy</span> = <span className="text-yellow-400">`I'm not just a learner. I learn, implement, and if I fail, I learn and implement again until I succeed.`</span>;</p>
                    <p className="ml-8"><span className="text-purple-400">this.playground</span> = [<span className="text-orange-400">'MERN stack'</span>, <span className="text-orange-400">'AI integration'</span>];</p>
                    <p className="ml-8"><span className="text-purple-400">this.approach</span> = <span className="text-pink-400">'I don\\'t just write code—I craft experiences that solve real problems.'</span>;</p>
                    <p className="ml-4">{`}`}</p>
                    <p className="ml-4"></p>
                    <p className="ml-4"><span className="text-blue-400 font-semibold">async</span> <span className="text-purple-400 font-semibold">getMindset</span>() {`{`}</p>
                    <p className="ml-8"><span className="text-gray-500">// Embrace the journey of continuous improvement</span></p>
                    <p className="ml-8"><span className="text-purple-400">return</span> <span className="text-purple-400">await</span> <span className="text-blue-400 font-semibold">this.failForward</span>();</p>
                    <p className="ml-4">{`}`}</p>
                    <p className="ml-4"></p>
                    <p className="ml-4"><span className="text-blue-400 font-semibold">failForward</span>() {`{`}</p>
                    <p className="ml-8"><span className="text-gray-500">/** Each bug is a lesson, each error is an opportunity **/</span></p>
                    <p className="ml-8"><span className="text-purple-400">this.commitToCleanCode</span>();</p>
                    <p className="ml-8"><span className="text-purple-400">this.buildScalableSolutions</span>();</p>
                    <p className="ml-8"><span className="text-purple-400">this.keepLearning</span>();</p>
                    <p className="ml-4">{`}`}</p>
                    <p><span className="text-purple-400 font-semibold">{`}`}</span></p>
                  </div>
                  
                  <div>
                    <span className="text-cyan-400">$</span>
                    <span className="text-gray-300 ml-2">cat status.json | jq '.current'</span>
                  </div>
                  
                  <div>
                    <p className="text-gray-500">{`{`}</p>
                    <p className="ml-4 text-green-400">"status": <span className="text-yellow-400">"engineering_the_future"</span>,</p>
                    <p className="ml-4 text-green-400">"progress": <span className="text-yellow-400">"one_line_at_a_time"</span>,</p>
                    <p className="ml-4 text-green-400">"mindset": <span className="text-yellow-400">"always_building_always_growing"</span>,</p>
                    <p className="ml-4 text-green-400">"next_challenge": <span className="text-yellow-400">"ready"</span></p>
                    <p className="text-gray-500">{`}`}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-cyan-400 animate-pulse">$</span>
                    <span className="text-gray-300 ml-2 animate-pulse">_</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced terminal footer */}
              <div className="bg-gray-800 px-2 py-0.5 border-t border-gray-700">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span>Connected</span>
                    </span>
                    <span>Lines: 18</span>
                    <span>UTF-8</span>
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400">Git: main</span>
                    <span className="flex items-center space-x-1">
                      <span>⚡</span>
                      <span>Dev Mode</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div ref={skillsRef} className={`space-y-8 transition-all duration-1000 ease-out ${
            skillsVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            <div className="text-center">
              <div className="inline-flex items-center space-x-3">
                <SparklesIcon className="text-cyan-400 w-6 h-6 animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Skills</h3>
                <SparklesIcon className="text-cyan-400 w-6 h-6 animate-pulse" />
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
              <SkillContainer hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} skillsVisible={skillsVisible} />
              <FrameworkContainer hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} skillsVisible={skillsVisible} />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

const SkillContainer = ({ hoveredSkill, setHoveredSkill, skillsVisible, delay = 0 }) => {
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
    <div className={`group relative transition-all duration-1000 ease-out ${
      skillsVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-20 opacity-0'
    }`}
    style={{ transitionDelay: `${delay}ms` }}>
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

const FrameworkContainer = ({ hoveredSkill, setHoveredSkill, skillsVisible }) => {
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
    <div className={`group relative transition-all duration-1000 ease-out ${
      skillsVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-20 opacity-0'
    }`}
    style={{ transitionDelay: '200ms' }}>
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
