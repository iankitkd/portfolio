"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="bg-background/45 py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Latest Projects"
          description="A selection of work highlighting my development expertise."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/80 shadow-xl shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
            >
              <div
                className={`${index < 2 ? "h-48 lg:h-64" : "h-48"} relative w-full overflow-hidden border-b border-border`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {index < 2 && (
                  <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    Featured
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
                <p className="mb-5 leading-7 text-secondary-foreground">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-xl border border-border/70 bg-background/60 px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-secondary-foreground transition hover:border-primary/50 hover:text-primary"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                  >
                    <FaExternalLinkAlt /> Live Demo
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
