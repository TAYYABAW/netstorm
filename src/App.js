import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toggle from "./components/Theme/Toggle";
import MyRouts from "./routers/routes";
import Header from "./components/Header/Header";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
        <Header />
        <MyRouts />
      </>
    </ThemeProvider>
  );
}

export default App;
