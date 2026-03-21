'use client'
import React from 'react'
import { ClockIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { motion } from 'framer-motion'
import "../../globals.css"

const page = () => {
  return (
    <div className='bg-bgColor min-h-screen relative overflow-hidden'>
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-theme/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brown-theme/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className='relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32'>
        <section className='space-y-8 mb-16'>
          <div className='space-y-4'>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='text-[10px] font-bold uppercase tracking-[0.4em] text-orange-theme'
            >
              AI & Web Development
            </motion.p>
            <h1 className='text-4xl md:text-7xl text-white font-serif font-bold leading-tight'>
              Building AI-Powered Web Applications
            </h1>
            <div className='flex items-center gap-3 pt-4'>
              <ClockIcon className='w-5 h-5 text-brown-theme'/>
              <p className='text-xs font-bold uppercase tracking-widest text-white/40'>20 min read</p>
            </div>
          </div>
          
          <p className='text-white/60 text-xl font-sans leading-relaxed border-l-2 border-orange-theme/30 pl-8 py-2'>
            Generative AI has revolutionized how we build web applications. This guide explores how to integrate powerful AI models like GPT and Gemini into your MERN stack applications to create intelligent, adaptive user experiences.
          </p>
        </section>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-24"
        >
          <Image 
            src="/acc-image.jpg"
            alt='AI and Web Development'
            width={1200}
            height={600}
            className='w-full h-auto'
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bgColor/60 to-transparent"></div>
        </motion.div>

        <article className='space-y-16 pb-24'>
          <div className='max-w-3xl space-y-6'>
            <h2 className="text-3xl md:text-4xl text-white font-serif font-bold border-b border-white/5 pb-4">Why Integrate Generative AI?</h2>
            <div className="space-y-6 text-white/50 leading-relaxed font-sans text-lg">
              <p>Generative AI APIs provide access to powerful language models that can understand context, generate content, and make intelligent decisions. By integrating these APIs into your web applications, you can create features like intelligent chatbots, content generation, data analysis, and personalized recommendations without building your own models from scratch.</p>
              <p>The beauty of using APIs from providers like Google Gemini, OpenAI, Anthropic Claude, and others is that you don't need deep machine learning expertise. You focus on building great user experiences while leveraging pre-trained, powerful models. This dramatically reduces development time and improves application capabilities. AI enables your applications to become more intuitive, adaptive, and valuable to users.</p>
              <p>The potential applications are vast: customer support automation reducing response times, content personalization improving engagement, code generation accelerating development, data analysis providing actionable insights, and creative assistance enhancing user productivity. Generative AI has transitioned from experimental to production-ready, making it essential for competitive web applications.</p>
            </div>
          </div>

          <div className='max-w-3xl space-y-6'>
            <h2 className="text-3xl md:text-4xl text-white font-serif font-bold border-b border-white/5 pb-4">Choosing the Right AI Provider</h2>
            <div className="space-y-4 text-white/50 leading-relaxed font-sans text-lg">
              <p><strong className="text-orange-theme">OpenAI GPT:</strong> The industry leader with GPT-4 and GPT-3.5-turbo models. Provides excellent language understanding and generation. Well-documented with proven production reliability. Higher cost compared to some alternatives but superior quality.</p>
              <p><strong className="text-orange-theme">Google Gemini:</strong> Google's advanced model combining text, image, and audio capabilities. Designed for multimodal tasks. Competitive pricing with free tier availability. Excellent for complex reasoning and long-context processing.</p>
              <p><strong className="text-orange-theme">Anthropic Claude:</strong> Known for safety and helpfulness, Claude excels at nuanced tasks and reasoning. Larger context window (up to 200k tokens) than many competitors. Growing adoption with strong community support.</p>
              <p><strong className="text-orange-theme">Open Source Models (Llama, Mistral):</strong> Self-hosted or API-based options like Together AI. More control over data and costs. Smaller models have lower latency. Consider if you need privacy or have specific compliance requirements.</p>
            </div>
          </div>

          <div className='max-w-3xl space-y-12'>
            <h2 className="text-3xl md:text-4xl text-white font-serif font-bold border-b border-white/5 pb-4">Integrating AI APIs</h2>
            
            <div className="space-y-4">
              <h3 className='text-xl text-orange-theme font-bold uppercase tracking-widest'>Step 1: Strategic Selection</h3>
              <p className='text-white/50 text-lg'>Evaluate your specific use cases carefully before choosing a provider. Consider factors like model capabilities, performance requirements, cost structure, availability in your region, and terms of service. Start with a free trial or tier to test the provider's API.</p>
            </div>

            <div className="space-y-4">
              <h3 className='text-xl text-orange-theme font-bold uppercase tracking-widest'>Step 2: Secure Infrastructure</h3>
              <p className='text-white/50 text-lg'>Create an account with your chosen provider and obtain API credentials/keys. Store these securely in environment variables (.env files locally, secrets management in production). Never expose API keys in client-side code.</p>
            </div>

            <div className="space-y-4">
              <h3 className='text-xl text-orange-theme font-bold uppercase tracking-widest'>Step 3: Robust Middleware</h3>
              <p className='text-white/50 text-lg'>Build Express.js endpoints that receive user requests, validate inputs, pass them to the AI API, process the response, and return formatted results to the frontend. This abstraction layer allows you to add custom logic, caching, and error handling.</p>
            </div>
          </div>

          <div className='max-w-3xl space-y-6'>
            <h2 className="text-3xl md:text-4xl text-white font-serif font-bold border-b border-white/5 pb-4">Best Practices</h2>
            <div className="space-y-6 text-white/50 leading-relaxed font-sans text-lg">
              <p><strong className="text-orange-theme">Error Handling:</strong> AI APIs fail, timeout, or produce unexpected results. Implement comprehensive error handling with meaningful user messages. Never expose raw API errors.</p>
              <p><strong className="text-orange-theme">Rate Limiting:</strong> Protect your application and manage costs by implementing rate limiting on backend endpoints. Track usage per user and globally.</p>
              <p><strong className="text-orange-theme">Prompt Engineering:</strong> Be specific about what you want the AI to do. Include context, expected output format, and constraints. Use few-shot learning by providing examples.</p>
            </div>
          </div>
        </article>

        <footer className='border-t border-white/5 pt-12 text-center'>
          <p className='text-white/20 text-xs font-bold uppercase tracking-widest'>
            Exploring the frontiers of technology & design
          </p>
        </footer>
      </div>
    </div>
  )
}

export default page
