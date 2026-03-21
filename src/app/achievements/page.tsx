'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrophyIcon, CpuChipIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { SplitText } from '../components/ui/SplitText';
import MagneticWrapper from '../components/ui/MagneticWrapper';
import "../globals.css";


const Achievements = () => {

  const achievements = [
    {
      title: "Chief Operating Officer",
      organization: "Arambh Organization, Division of Student Organization, LPU",
      icon: <CheckCircleIcon className="w-5 h-5" />,
      color: "text-orange-theme",
      bgColor: "bg-boxes",
      borderColor: "border-orange-theme/30",
      description: "Commanding the ship as COO, steering student organizations to greatness while orchestrating epic campus adventures and building unforgettable student experiences!",
      period: "2024 - Present",
      image: "/aarambh.png"
    },
    {
      title: "Club President",
      organization: "Zillion: Team L&T under Center of Professional Enhancement, LPU",
      icon: <TrophyIcon className="w-5 h-5" />,
      color: "text-orange-theme",
      bgColor: "bg-boxes",
      borderColor: "border-orange-theme/30",
      description: "Reigned as tech club president, transforming coding education into an exciting journey through epic battles, mind-blowing webinars, and knowledge-sharing sessions that inspire future tech leaders!",
      period: "2023 - 2024",
      image: "/zillion.png"
    },
    {
      title: "Coding Excellence",
      organization: "Problem Solving Across Platforms",
      icon: <CpuChipIcon className="w-5 h-5" />,
      color: "text-orange-theme",
      bgColor: "bg-boxes",
      borderColor: "border-orange-theme/30",
      description: "Conquered 150+ coding challenges across multiple platforms, transforming from code warrior to algorithm master while crushing problems like a coding ninja!",
      period: "Ongoing",
      platforms: ["LeetCode", "GeeksforGeeks", "InterviewBit", "HackerRank"]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern and Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[url('/newbie.png')] bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brown-theme/5 via-transparent to-orange-theme/5"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center space-x-6 mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrophyIcon className="text-orange-theme w-12 h-12" />
            </motion.div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-theme/50 to-transparent"></div>
            <span className="text-orange-theme text-sm font-bold tracking-[0.2em] uppercase font-sans">Milestones</span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-theme/50 to-transparent"></div>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrophyIcon className="text-orange-theme w-12 h-12" />
            </motion.div>
          </motion.div>

          <SplitText
            text="Achievements & Milestones"
            className="text-hierarchy-primary mb-8 justify-center bg-gradient-to-r from-orange-theme to-brown-theme bg-clip-text text-transparent font-serif"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/50 text-xl max-w-3xl mx-auto leading-relaxed font-sans"
          >
            A journey of professional growth, technical excellence, and continuous learning.
          </motion.p>
        </div>

        {/* Achievement Cards */}
        <div className="max-w-5xl mx-auto px-4 pb-20">
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-theme/5 to-brown-theme/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-boxes border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-orange-theme/40 transition-all duration-500 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-6">
                    {/* Organization Image/Collage */}
                    <div className="flex-shrink-0">
                      {achievement.image ? (
                        <div className="relative">
                          <Image
                            src={achievement.image}
                            alt={achievement.organization}
                            width={160}
                            height={160}
                            className="rounded-xl border-2 border-gray-600 shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-theme rounded-full flex items-center justify-center">
                            <CheckCircleIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      ) : achievement.platforms ? (
                        <div className="w-36 h-36 grid grid-cols-2 gap-1 rounded-xl border-2 border-gray-600 p-2 bg-boxes">
                          {achievement.platforms.map((platform, idx) => (
                            <div
                              key={idx}
                              className={`
                                flex items-center justify-center text-xs font-bold rounded-lg border
                                ${platform === 'LeetCode' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : ''}
                                ${platform === 'GeeksforGeeks' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                                ${platform === 'InterviewBit' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : ''}
                                ${platform === 'HackerRank' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' : ''}
                              `}
                            >
                              <span className="text-center leading-tight px-1">
                                {platform.length > 8 ? platform.substring(0, 6) + '...' : platform}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={`w-36 h-36 ${achievement.bgColor} ${achievement.borderColor} border-2 rounded-xl flex items-center justify-center shadow-lg`}>
                          <div className="text-brand">
                            {achievement.icon}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-orange-theme transition-colors duration-500 font-serif">
                          {achievement.title}
                        </h3>
                        <p className="text-white/70 text-lg font-medium mb-4">
                          {achievement.organization}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-white/5 border border-white/10 text-white/60 tracking-wider`}>
                            {achievement.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-white/50 text-lg leading-relaxed mb-6 font-sans">
                        {achievement.description}
                      </p>

                      {/* Achievement indicators */}
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-orange-theme/10 text-orange-theme border border-orange-theme/20">
                          ✓ Verified
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-brown-theme/10 text-brown-theme border border-brown-theme/20">
                          ⭐ Impact
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center space-x-12 bg-boxes border border-white/10 px-12 py-6 rounded-2xl shadow-2xl backdrop-blur-xl">
              <MagneticWrapper>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="text-center cursor-default"
                >
                  <div className="text-3xl font-bold text-orange-theme mb-1">3+</div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Achievements</div>
                </motion.div>
              </MagneticWrapper>
              <div className="w-px h-12 bg-white/10"></div>
              <MagneticWrapper>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="text-center cursor-default"
                >
                  <div className="text-3xl font-bold text-orange-theme mb-1">150+</div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Solved</div>
                </motion.div>
              </MagneticWrapper>
              <div className="w-px h-12 bg-white/10"></div>
              <MagneticWrapper>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="text-center cursor-default"
                >
                  <div className="text-3xl font-bold text-brown-theme mb-1">2</div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Leadership</div>
                </motion.div>
              </MagneticWrapper>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
