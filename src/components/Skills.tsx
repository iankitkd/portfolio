"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data";
import { IconType } from "react-icons";
import SectionHeader from "@/components/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Skills"
          description="A snapshot of my technical expertise."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
  category: string;
  Icon: IconType;
  color: string;
  skills: { name: string; Icon: IconType; color: string }[];
  index: number;
}

function SkillCategoryCard({
  category,
  Icon,
  color,
  skills,
  index,
}: SkillCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-border bg-card/80 p-5 shadow-xl shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="rounded-xl p-2"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="w-6 h-6" color={color} />
          </div>

          <h3 className="text-lg md:text-xl font-semibold">{category}</h3>
        </div>
        {/* <span className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground">
          {skills.length} tools
        </span> */}
      </div>

      <div className="flex flex-wrap gap-2.5">
        {skills.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="flex items-center gap-2 rounded-xl border border-border/70 bg-background/60 px-3 py-2 text-sm font-medium transition hover:border-primary/35 hover:bg-card-hover"
          >
            <Icon className="w-4 h-4" color={color} />
            <span className="text-secondary-foreground">{name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
