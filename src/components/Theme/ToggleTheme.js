import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../useDarkMode";
import { lightTheme, darkTheme } from "../../theme";
import { GlobalStyles } from "../../global";
import Toggle from "./Toggle";

const ToggleTheme = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }
  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default ToggleTheme;
