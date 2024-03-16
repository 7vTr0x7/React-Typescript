import { useContext } from "react";
import { ThemeContext } from "../utils/themeContext";

const Ex = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="container"
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}>
      <button onClick={toggleTheme}>change Theme</button>
    </div>
  );
};

export default Ex;
