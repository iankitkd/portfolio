"use client"

import { motion } from 'framer-motion';
import { projects } from '@/data';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gradient-accent-start to-gradient-accent-end mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col bg-gradient-to-br from-gradient-start to-gradient-mid rounded-xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary-border"
            >
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={project.image} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-secondary-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-card rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex space-x-6">
                  <a 
                    href={project.github} 
                    className="text-primary hover:text-primary-hover transition-colors flex items-center"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a 
                    href={project.live} 
                    className="text-primary hover:text-primary-hover transition-colors flex items-center"
                  >
                    <FaExternalLinkAlt className='mr-2' /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}