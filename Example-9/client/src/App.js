import "./App.css";

import { init } from "./API/SocketAPI";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    init();
  }, []);
  return <div className="App"></div>;
}

export default App;
