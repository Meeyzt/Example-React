import { useState } from "react";

function Palette() {
  const [color, setColor] = useState("#000");
  return (
    <div className="palette">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button>Send Data</button>
    </div>
  );
}

export default Palette;
