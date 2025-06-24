'use client'

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");

  // Apply theme to <body> element
  const applyTheme = (theme: Theme) => {
    const body = document.body;
    if (theme === 'light') {
      body.classList.add('light');
    } else {
      body.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setThemeState(storedTheme);
      applyTheme(storedTheme);
    } 
    // else {
    //   // Fallback to system preference
    //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    //   const systemTheme = prefersDark ? 'dark' : 'light'
    //   setThemeState(systemTheme)
    //   applyTheme(systemTheme)
    // }
  }, []);

  return { theme, setTheme };
}
