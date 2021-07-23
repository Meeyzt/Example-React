import { useTheme } from "../context/ThemeContext";

function Switcher() {
  const { theme, setTheme } = useTheme();

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
