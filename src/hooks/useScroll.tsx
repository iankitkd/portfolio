"use client"

import { useEffect, useState } from 'react'

export default function useScroll() {
    // const [showScrollButton, setShowScrollButton] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // show scroll button when scroll > 100px
            // setShowScrollButton(window.scrollY > 100) 

            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - lastScrollY) > 50) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setShowHeader(false);
                } else {
                    setShowHeader(true);
                }
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' })
    // }

    return { showHeader }
}
