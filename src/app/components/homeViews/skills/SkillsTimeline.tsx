'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SkillsTimeline = () => {
  const [mounted, setMounted] = useState(false)
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set())

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      const skillElements = document.querySelectorAll('.skill-item')
      const newVisibleSkills = new Set<number>()
      
      skillElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          newVisibleSkills.add(index)
        }
      })
      
      setVisibleSkills(newVisibleSkills)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "TypeScript", level: 85, color: "from-blue-400 to-indigo-500" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-400 to-cyan-500" },
        { name: "Next.js", level: 82, color: "from-gray-400 to-gray-600" }
      ]
    },
    {
      category: "Backend Development", 
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-400 to-emerald-500" },
        { name: "Express.js", level: 80, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", level: 75, color: "from-green-500 to-emerald-600" },
        { name: "REST APIs", level: 88, color: "from-purple-400 to-pink-500" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "Python", level: 78, color: "from-yellow-400 to-orange-500" },
        { name: "OpenAI APIs", level: 85, color: "from-green-400 to-emerald-500" },
        { name: "LangChain", level: 72, color: "from-blue-400 to-indigo-500" },
        { name: "Prompt Engineering", level: 90, color: "from-purple-400 to-pink-500" }
      ]
    },
    {
      category: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 92, color: "from-orange-400 to-red-500" },
        { name: "VS Code", level: 95, color: "from-blue-400 to-cyan-500" },
        { name: "Figma", level: 70, color: "from-purple-400 to-pink-500" },
        { name: "Docker", level: 65, color: "from-blue-500 to-cyan-600" }
      ]
    }
  ]

  if (!mounted) return null

  return (
    <section className="min-h-screen bg-bgColor py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand/5 to-purple-500/5'></div>
      <div className='absolute top-[-100px] right-[-100px] h-[300px] w-[300px] bg-brand/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-[-100px] left-[-100px] h-[300px] w-[300px] bg-purple-500/10 rounded-full blur-3xl'></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-brand">Skills</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency across various technologies and tools.
          </p>
        </motion.div>

        {/* Skills Timeline */}
        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2, ease: "easeOut" }}
              className="skill-item"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-brand/20 to-purple-500/20 backdrop-blur-md p-3 rounded-xl border border-brand/20 mr-4">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.category}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: visibleSkills.has(categoryIndex * 10 + skillIndex) ? 1 : 0,
                      y: visibleSkills.has(categoryIndex * 10 + skillIndex) ? 0 : 20
                    }}
                    transition={{ duration: 0.6, delay: 0.1 * skillIndex }}
                    className="bg-boxes backdrop-blur-md p-6 rounded-xl border border-brand/20 hover:border-brand/30 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-medium text-white group-hover:text-brand transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-gray-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ 
                            width: visibleSkills.has(categoryIndex * 10 + skillIndex) ? `${skill.level}%` : 0 
                          }}
                          transition={{ duration: 1.5, delay: 0.2 * skillIndex, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div 
                        className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                      ></div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {skill.level >= 80 && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                          Expert
                        </span>
                      )}
                      {skill.level >= 60 && skill.level < 80 && (
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                          Proficient
                        </span>
                      )}
                      {skill.level < 60 && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                          Learning
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-brand/10 to-purple-500/10 backdrop-blur-md p-8 rounded-2xl border border-brand/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-300 mb-6">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring advanced AI integration and cloud architectures.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-3 py-1 bg-brand/20 text-brand text-sm rounded-full border border-brand/30">
                Next.js 15
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                AI Agents
              </span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                Web3
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                Kubernetes
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsTimeline
