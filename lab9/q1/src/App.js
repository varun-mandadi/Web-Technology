import React from "react";
import "./App.css";
function StudentProfile() {
  const name = "Varun";
  const department = "Computer Science";
  const year = "3rd Year";
  const section = "A";
  return (
    <div className="profile-container">
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Section:</strong> {section}</p>
    </div>
  );
}
function App() {
  return (
    <div className="app-container">
      <StudentProfile />
    </div>
  );
}
export default App;