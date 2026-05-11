import React, { createContext, useContext, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: typeof darkColors;
}

const darkColors = {
  bg: "#0D0D0D",
  card: "#1A1A1A",
  accent: "#f13838",
  accentGlow: "rgba(226, 37, 37, 0.25)",
  accentRing: "#1f1f58",
  text: "#FFFFFF",
  subtext: "#888888",
  tagline: "#4ADE80",
  inputBg: "#1F1F1F",
  inputBorder: "#f17878",
  chipBg: "#1F1F1F",
  chipBorder: "#f17878",
  deleteBg: "#2A1A1A",
};

const lightColors = {
  bg: "#eaf8fd",
  card: "#FFFFFF",
  accent: "#80a7fa",
  accentGlow: "rgba(34,197,94,0.2)",
  accentRing: "#22d1dd",
  text: "#1A1A1A",
  subtext: "#555555",
  tagline: "#16A34A",
  inputBg: "#FFFFFF",
  inputBorder: "#69d2f1",
  chipBg: "#F0FDF4",
  chipBorder: "#76c0e2",
  deleteBg: "#FEF2F2",
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  colors: darkColors,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const colors = theme === "dark" ? darkColors : lightColors;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);