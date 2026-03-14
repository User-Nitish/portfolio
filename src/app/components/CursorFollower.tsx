'use client'
import React, { useState, useEffect } from 'react'

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let rafId: number
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const animate = () => {
      const dx = targetX - currentX
      const dy = targetY - currentY
      currentX += dx * 0.2
      currentY += dy * 0.2
      
      setPosition({ x: currentX, y: currentY })
      rafId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(animate)
    
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform'
      }}
    >
      {/* Outer hollow circle */}
      <div className="absolute w-6 h-6 border-2 border-brand rounded-full opacity-40"></div>
      
      {/* Inner filled dot */}
      <div className="relative w-2 h-2 bg-brand rounded-full opacity-80"></div>
    </div>
  )
}

export default CursorFollower
