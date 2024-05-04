import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useState("light");

  useEffect(() => {
    const appEl = document.getElementById("app");
    if (appEl) {
      const backgroundColor = theme === "dark" ? "black" : "white";
      appEl.className = theme;
      appEl.style.backgroundColor = backgroundColor;
    }
  }, [theme]);

  //     const font = new FontFace(
  //       "supreme",
  //       "url(./Fonts/5ZZU4JM62PS7KOJ7BOKLPL3AEO2G76TS.woff2) )"
  //     );
  //     font.load().then(() => {
  //       document.fonts.add(font);
  //       applyFont();
  //     });
  //   }, [language]);

  const contextValue = {
    theme,
    toggleTheme: (newTheme) => {
      toggleTheme(newTheme);
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
