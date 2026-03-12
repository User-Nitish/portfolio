'use client'
import React from 'react';
import Image from 'next/image';
import { TrophyIcon, CpuChipIcon, CheckCircleIcon } from '@heroicons/react/24/solid';


const Achievements = () => {

  const achievements = [
    {
      title: "Chief Operating Officer",
      organization: "Arambh Organization, Division of Student Organization, LPU",
      icon: <CheckCircleIcon className="w-5 h-5" />,
      color: "text-brand",
      bgColor: "bg-boxes",
      borderColor: "border-brand/30",
      description: "Leading operational strategies and managing organizational activities",
      period: "2024 - Present",
      image: "/aarambh.png"
    },
    {
      title: "Club President", 
      organization: "Zillion: Team L&T under Center of Professional Enhancement, LPU",
      icon: <TrophyIcon className="w-5 h-5" />,
      color: "text-brand",
      bgColor: "bg-boxes",
      borderColor: "border-brand/30",
      description: "Leading technical initiatives and organizing professional development activities",
      period: "2023 - 2024",
      image: "/zillion.png"
    },
    {
      title: "Coding Excellence",
      organization: "Problem Solving Across Platforms",
      icon: <CpuChipIcon className="w-5 h-5" />,
      color: "text-brand",
      bgColor: "bg-boxes",
      borderColor: "border-brand/30",
      description: "Solved 150+ coding problems on LeetCode and many more on other platforms",
      period: "Ongoing",
      platforms: ["LeetCode", "GeeksforGeeks", "InterviewBit", "HackerRank"]
    }
  ];

  return (
    <div className="min-h-screen bg-bgColor">
      
      <div>
        {/* Header */}
        <div className="text-center py-16">
          <div className="inline-flex items-center space-x-3 mb-8">
            <TrophyIcon className="text-brand w-10 h-10" />
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-brand to-transparent"></div>
            <span className="text-brand text-sm font-semibold tracking-wider uppercase">Achievements</span>
            <div className="h-px w-32 bg-gradient-to-r from-brand via-transparent to-transparent"></div>
            <TrophyIcon className="text-brand w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6 font-bold">
            Achievements & Milestones
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A journey of professional growth, technical excellence, and continuous learning
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="max-w-5xl mx-auto px-4 pb-20">
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group relative">
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-cyan-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-boxes border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-brand/30">
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
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-brand rounded-full flex items-center justify-center">
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
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand transition-colors duration-300">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-300 text-base font-medium mb-3">
                          {achievement.organization}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${achievement.bgColor} ${achievement.borderColor} border text-gray-300`}>
                            {achievement.period}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-base leading-relaxed mb-4">
                        {achievement.description}
                      </p>
                      
                      {/* Achievement indicators */}
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-brand/10 text-brand border border-brand/20">
                          ✓ Verified
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          ⭐ Impact
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-boxes border border-gray-700 px-8 py-4 rounded-full">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand">3+</div>
                <div className="text-xs text-gray-400">Achievements</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">150+</div>
                <div className="text-xs text-gray-400">Problems Solved</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">2</div>
                <div className="text-xs text-gray-400">Leadership Roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
