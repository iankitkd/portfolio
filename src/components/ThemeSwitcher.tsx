import { useTheme } from "@/hooks/useTheme"
import { IoMoon, IoSunny } from "react-icons/io5"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  // Avoid SSR mismatch before hydration
  if (!theme) return null 

  return (
    <button
      className="border-l border-border pl-2 py-1 cursor-pointer hover:text-primary"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <IoSunny className="h-5 w-5" /> : <IoMoon className="h-5 w-5" />}
    </button>
  )
}
