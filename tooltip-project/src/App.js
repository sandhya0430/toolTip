 
 import React from "react";
 import "./App.css";
 import Tooltip from "./tooltip";

function App() {
   
  return (
    <div className="App">
      <h1>React Tooltip Example</h1>
      <Tooltip content="Song #12345">
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
}

export default App;
