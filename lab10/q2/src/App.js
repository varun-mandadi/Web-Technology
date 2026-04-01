import React, { useState } from "react";
import "./App.css";
function ItemList({ items, onRemove }) {
  if (items.length === 0) {
    return <p className="empty">No items available</p>;
  }
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id} className="list-item">
          {item.text}
          <button className="delete-btn" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
function App() {
  const [items, setItems] = useState([]); 
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;
    const newItem = {
      id: Date.now(), 
      text: input
    };
    setItems((prev) => [...prev, newItem]);
    setInput("");
  };
  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="app-container">
      <h2>Dynamic Item List</h2>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
        />
        <button className="btn" onClick={addItem}>Add</button>
      </div>
      <ItemList items={items} onRemove={removeItem} />
    </div>
  );
}
export default App;