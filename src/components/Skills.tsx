"use client"

import { motion } from 'framer-motion';
import { skillCategories } from '@/data';
import { IconType } from 'react-icons';

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Skills
          </h2>
          <p className="text-lg text-secondary-foreground max-w-xl mx-auto mb-4">
            A snapshot of my technical expertise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gradient-accent-start to-gradient-accent-end mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <SkillCategoryCard
              key={cat.category}
              category={cat.category}
              Icon={cat.Icon}
              color={cat.color}
              skills={cat.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


interface SkillCategoryCardProps {
  category: string , 
  Icon: IconType, 
  color: string, 
  skills: {name:string, Icon: IconType, color:string}[], 
  index:number,
}

function SkillCategoryCard({ category, Icon, color, skills, index }: SkillCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-2xl shadow-md p-6 bg-gradient-to-br from-gradient-start to-gradient-mid border border-border transition-all duration-300 hover:shadow-lg hover:border-primary-border"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg" style={{ backgroundColor: `${color}20` }}>
          <Icon className="w-6 h-6" color={color} />
        </div>

        <h3 className="text-lg md:text-xl font-semibold">
          {category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-card hover:bg-card-hover hover:scale-[1.03] duration-300 transition-transform"
          >
            <Icon className="w-4 h-4" color={color} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
