"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fullName, heroData } from "@/data";
import ContactSocials from "./ContactSocials";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import TerminalCard from "@/components/TerminalCard";

export default function Hero() {
  return (
    <section id="about" className="flex min-h-screen items-center pt-24">
      <div className="container mx-auto px-4 py-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex flex-wrap gap-3"
            >
              {heroData.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs lg:text-sm font-medium text-primary"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
            >
              {fullName}
              <span className="block bg-linear-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                {heroData.title}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-7 text-xl text-secondary-foreground md:text-2xl"
            >
              {heroData.description}
            </motion.h2>

            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 max-w-2xl text-lg leading-8 text-muted-foreground"
            >
              {heroData.description}
            </motion.p> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <ContactSocials />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:opacity-95"
              >
                View Projects <FiArrowRight />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-5 py-3 font-semibold text-secondary-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                Resume <FiDownload />
              </Link>
            </motion.div>
          </div>

          {/* terminal card */}
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
