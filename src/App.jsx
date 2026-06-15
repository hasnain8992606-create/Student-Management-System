import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import AddStudent from "./Pages/AddStudent";
import Edite from "./Pages/Edite";
import Dashboard from "./Dashboard Component/Dashboard";


function App() {
  // const [names, setNames] = useState([]);
  // const [input, setInput] = useState("");

  // function addName() {
  //   if (input.trim() === "") return alert('Plase fill out input field');

  //   setNames([...names, input]);
  //   setInput("");
  // }

  return (
    // <div className="m-3">

    //   <input
    //     type="text"
    //     value={input}
    //     onChange={(e) => setInput(e.target.value)}
    //     placeholder="Enter your name"
    //     className="border px-2"
    //     />

    //   <button
    //     onClick={addName}
    //     className="border ml-2 px-2"
    //     >
    //     Add Student
    //   </button>
    //     {names.map((item, index) => (
    //       <h1 key={index}>{item}</h1>
    //     ))}
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Addstudent" element={<AddStudent />} />
      <Route path="/edit/:userId" element={<Edite />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;