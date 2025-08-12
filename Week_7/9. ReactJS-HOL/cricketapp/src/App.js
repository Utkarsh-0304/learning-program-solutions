import React from "react";
import "./App.css";
import ListOfPlayers from "./components/ListOfPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {
  const flag = false;

  return (
    <div className="App">
      <header className="App-header">
        {flag ? <ListOfPlayers /> : <IndianPlayers />}
      </header>
    </div>
  );
}

export default App;
