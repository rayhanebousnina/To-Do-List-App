import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("")
  const handleChange = (e) => {
    setTask(e.target.value)
    console.log(task)
  }
  return (
    <div>
      <h1>To Do List</h1>
      <input onChange={handleChange} placeholder="Enter your task"></input>
      <ul>
        <li>{task}</li>
      </ul>
    </div>
  );
}

export default App;
