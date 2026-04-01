import React from "react";
import "./App.css";
function StudentCard({ name, department, marks }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Marks:</strong> {marks}</p>
    </div>
  );
}
function App() {
  const students = [
    { id: 1, name: "Varun", department: "CSE", marks: 85 },
    { id: 2, name: "Rahul", department: "ECE", marks: 78 },
    { id: 3, name: "Anjali", department: "IT", marks: 92 },
    { id: 4, name: "Sneha", department: "EEE", marks: 88 }
  ];
  return (
    <div className="app-container">
      <h2>Student Cards</h2>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          department={student.department}
          marks={student.marks}
        />
      ))}
    </div>
  );
}
export default App;