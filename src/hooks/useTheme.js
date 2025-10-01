import { useState, useEffect } from "react";

export function useTheme() {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  return { theme, toggleTheme };
}
