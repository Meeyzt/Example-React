import "./App.css";

import { init } from "./API/SocketAPI";
import { useEffect } from "react";
import Palette from "./components/Palette";

function App() {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="App">
      <Palette />
    </div>
  );
}

export default App;
