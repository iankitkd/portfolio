"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data";
import { FiFileText } from "react-icons/fi";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
// import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  const { showHeader } = useScroll();
  return (
    <AnimatePresence>
      {showHeader && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-4 z-50 w-full px-4"
        >
          <div className="text-center">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-2xl border border-border bg-background/80 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl md:gap-3">
              {navLinks.map(({ name, href, Icon }) => (
                <Link
                  key={name}
                  href={href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-secondary-foreground transition hover:bg-card-hover hover:text-primary md:px-4"
                >
                  <p className="hidden md:block">{name}</p>
                  <Icon className="md:hidden" size={22} />
                </Link>
              ))}
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-95 md:px-4"
              >
                <p className="hidden md:block">Resume</p>
                <FiFileText className="md:hidden" size={22} />
              </Link>

              {/* <ThemeSwitcher/> */}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
