import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../context/useTheme"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-12 h-12 rounded-full flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-all duration-300 border-2 border-orange-500/20"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 text-orange-600 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 text-orange-400 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}