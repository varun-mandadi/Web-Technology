import React, { useEffect, useState } from "react";
import "./App.css";
function DataList({ data }) {
  return (
    <ul className="list">
      {data.map((item) => (
        <li key={item.id} className="list-item">
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.slice(0, 5)); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []); 
  return (
    <div className="app-container">
      <h2>API Data Fetch Example</h2>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <DataList data={data} />}
    </div>
  );
}
export default App;

