"use client"

import { useEffect, useRef } from "react";

export default function Background() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    particlesRef.current.innerHTML = '';

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 5 + 10;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const animationDuration = Math.random() * 20 + 10;
      const animationDelay = Math.random() * 5;
      const opacity = Math.random() * 0.3 + 0.1;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDuration = `${animationDuration}s`;
      particle.style.animationDelay = `${animationDelay}s`;
      particle.style.opacity = `${opacity}`;
      
      particlesRef.current.appendChild(particle);
    }
}, []);

  return (
    <div 
      ref={particlesRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    />
  )
}
