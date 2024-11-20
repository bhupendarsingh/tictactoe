import GameBoard from "./components/GameBoard";
import Player from "./components/player";
import "./App.css";
import { useState } from "react";

function App() {
  let initialName;
  
  const[activePlayer,setActivePlayer]=useState("X");

  return (
    <>
      <div
        style={{display: "flex", justifyContent: "center",backgroundColor: "grey", alignItems: "center"}}>
        <ul style={{ display: "flex", alignItems: "center" }}>
          <Player  symbol="X" activePlayer={activePlayer}  initialName="PlayerX" />
          <Player  symbol="0" activePlayer={activePlayer}  initialName="Player0" />
        </ul>
      </div>
      <div className="container"  style={{ display: "flex", justifyContent: "center" }}>
        <GameBoard activePlayer={activePlayer} setActivePlayer={setActivePlayer}  initialName={initialName}/>
      </div>
    </>
  );
}

export default App;