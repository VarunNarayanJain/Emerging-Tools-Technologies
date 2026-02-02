import React from "react"

export type Theme = "light" | "dark"

export const ThemeProviderContext = React.createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: "light",
  setTheme: () => {},
})