import React from "react";
import { func, string } from "prop-types";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <span onClick={toggleTheme} style={{ cursor: "pointer" }}>
      {theme === "light" ? (
        <img src="https://img.icons8.com/ios-glyphs/30/000000/do-not-disturb-2.png" width={30} />
      ) : (
        <img src="https://img.icons8.com/color/50/000000/sun--v1.png"  width={30}/>
      )}
    </span>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
