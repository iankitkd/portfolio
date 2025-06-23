"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fullName, heroData } from "@/data";
import ContactSocials from './ContactSocials';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 pt-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-400 mb-4"
          >
            Hello, I&apos;m
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {fullName}
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl mb-8"
          >
            Full-Stack <span className="text-purple-400">Web Developer</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 mb-10 max-w-2xl"
          >
            {heroData.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <ContactSocials/>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="#projects" className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-500 rounded-full hover:opacity-90 transition-opacity">
              View Projects
            </Link>
            <Link href="#contact" className="px-6 py-3 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500/10 transition-colors">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}