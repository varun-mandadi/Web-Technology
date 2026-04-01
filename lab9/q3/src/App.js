import React, { useState } from "react";
import "./App.css";
function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const setCounter = () => {
    if (inputValue === "") return;
    setCount(Number(inputValue));
  };
  return (
    <div className="counter-card">
      <h2>Counter with Input</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter starting value"
        className="input-box"
      />
      <button className="btn set-btn" onClick={setCounter}>
        Set Counter
      </button>
      <p className="count-value">{count}</p>
      <div className="btn-group">
        <button className="btn" onClick={decrement}>- Decrease</button>
        <button className="btn" onClick={increment}>+ Increase</button>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="app-container">
      <Counter />
    </div>
  );
}
export default App;