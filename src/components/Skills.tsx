"use client"

import { motion } from 'framer-motion';
import { skills } from '@/data';

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gradient-accent-start to-gradient-accent-end mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {skills.map(({ name, Icon, color }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className={`flex flex-row gap-2 items-center justify-center rounded-full py-3 md:py-4 bg-card shadow-md transform hover:scale-[1.02] transition-all hover:bg-card-hover`}>
                <Icon className={`w-8 h-8 md:w-10 md:h-10 text-foreground`} color={color} />
                <p className="md:text-lg font-medium text-center">{name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}