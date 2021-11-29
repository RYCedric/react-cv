import React, { useState } from "react";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

const DarkMode = () => {
  const [themeMode, setThemeMode] = useState("ligth");

  let clicked = "clicked";
  const body = document.body;
  const lightTheme = "ligth";
  const darkTheme = "dark";
  let theme;

  localStorage && (theme = localStorage.getItem("theme"));

  theme === lightTheme || theme === darkTheme
    ? body.classList.add(theme)
    : body.classList.add(lightTheme);

  const switchMode = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clicked);
      localStorage.setItem("theme", "ligth");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clicked);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
    setThemeMode(theme);
  };

  return (
    <button
      className={theme === "dark" ? clicked : ""}
      id="darkMode"
      onClick={(e) => switchMode(e)}
    >
      {themeMode === "dark" ? <MdWbSunny /> : <MdDarkMode />}
    </button>
  );
};

export default DarkMode;
