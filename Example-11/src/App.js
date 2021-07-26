import "./App.css";
import Box from "./components/Box";
import { LocaleProvider } from "./context/LocaleContext";

function App() {
  return (
    <div className="App">
      <LocaleProvider>
        <Box />
      </LocaleProvider>
    </div>
  );
}

export default App;
