"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import SectionHeader from "@/components/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Experience"
          description="Where I've worked, what I've built and the impact I've made."
          // description="A snapshot of the roles I&apos;ve taken on and the value I&apos;ve delivered."
        />

        <div className=" max-w-5xl space-y-6">
          {experienceData.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-xl shadow-black/10 backdrop-blur transition hover:border-primary/45 md:p-8"
            >
              {/* <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-primary to-cyan-300" /> */}
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl border border-border bg-background/70 p-3">
                    <FiBriefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="font-medium text-primary">{item.company}</p>
                  </div>
                </div>

                <div className="flex gap-3 text-sm text-secondary-foreground md:flex-col md:items-end md:gap-1">
                  <span className="flex items-center gap-2">
                    <FiCalendar className="h-4 w-4" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiMapPin className="h-4 w-4" />
                    {item.location}
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-secondary-foreground">
                {item.description.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {/* <FiCheck className="mt-1 h-4 w-4 flex-shrink-0 text-primary" /> */}
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-xl border border-border/70 bg-background/60 px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
