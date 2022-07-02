import { useState } from "react";
import { init, toGray, toThreshold } from "../../src";
await init();

function App() {
  const test = () => {
    const w = 600;
    const h = 800;
    for (let i = 0; i < 10; i++) {
      const buffer = Array(600 * 800 * 4).fill(0);
      const g = toGray(buffer, w, h);
      const th = toThreshold(g, w, h);
      console.log("test", th.length);
    }
  };
  return (
    <div>
      <button onClick={test}>test</button>
    </div>
  );
}

export default App;
