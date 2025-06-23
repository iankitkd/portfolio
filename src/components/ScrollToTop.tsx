"use client"

import useScroll from '@/hooks/useScroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTop() {
  const {showScrollButton, scrollToTop} = useScroll();

  return (
    <AnimatePresence>
      {showScrollButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 rounded-full p-3 bg-gray-800 text-white cursor-pointer shadow-lg hover:bg-purple-700 transition-colors"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </motion.div>
      )}
    </AnimatePresence>
  )
}