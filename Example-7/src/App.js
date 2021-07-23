import Switcher from "./components/Switcher";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Switcher />
    </ThemeProvider>
  );
}

export default App;
