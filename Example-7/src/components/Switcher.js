import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Switcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
      <button
        className={`btn ${theme === "dark" ? "btndark" : "btnlight"}`}
        onClick={handleClick}
      >
        {theme === "dark" ? "Change theme to light" : "Change theme to dark"}
      </button>
    </div>
  );
}

export default Switcher;
