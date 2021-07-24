import { useState } from "react";

import { send } from "../API/SocketAPI";

function Palette({ activeColor }) {
  const [color, setColor] = useState("#000");
  return (
    <div className="palette">
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Send Data</button>
    </div>
  );
}

export default Palette;
