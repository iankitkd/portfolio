"use client"

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, resumeLink } from "@/data";
import { FiFileText } from "react-icons/fi";
import useScroll from "@/hooks/useScroll";

export default function Header() {
  const {showHeader} = useScroll();
  return (
    <AnimatePresence>
      {
        showHeader && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 z-50 w-full"
          >
            <div className="text-center rounded-full backdrop-blur-sm">
              
              <div className="flex items-center space-x-8 w-fit px-4 md:px-8 py-3 mx-auto rounded-full bg-gray-950/95 border-b border-purple-800">
                {
                  navLinks.map(({name, href, Icon}) => (
                    <Link key={name} href={href} className="hover:text-purple-400 transition-all">
                      <p className="hidden md:block">{name}</p>
                      <Icon className="md:hidden" size={22}/>
                    </Link>
                  ))
                }
                <a href={resumeLink} target="_blank" rel="noopener noreferrer" 
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 hover:opacity-90 transition-opacity"
                >
                  <p className="hidden md:block">Resume</p>
                  <FiFileText className="md:hidden" size={22}/>
                </a>
              </div>
                                          
            </div>
           </motion.nav>
        )
      }
    </AnimatePresence>
  );
}