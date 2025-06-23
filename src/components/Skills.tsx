"use client"

import { motion } from 'framer-motion';
import { skills } from '@/data';

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {skills.map(({ name, Icon, color }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className={`group flex flex-row gap-2 items-center justify-center rounded-full py-3 md:py-4 bg-gray-800 shadow-lg transform hover:scale-[1.02] transition-all hover:bg-gray-700 `}>
                <Icon className={`w-8 h-8 md:w-10 md:h-10`} color={color} />
                <p className="md:text-lg font-medium text-center">{name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}