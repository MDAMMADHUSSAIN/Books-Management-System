import React from "react";
import Books from "./components/Books";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-danger">Welcome To Books Management System</h1>
      <h4 className="text-center text-success" >By MD AMMAD HUSSAIN</h4>
      <Books />
    </div>
  );
}

export default App;