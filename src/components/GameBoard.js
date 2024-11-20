import React, { useState } from "react";
export default function GameBoard({
  activePlayer,
  setActivePlayer,
  initialName,
}) {
  const [gridArray, setGridArray] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [disabled, todisable] = useState(false);
  const [clickedBlocks, selectBlock] = useState([]);

  function youWon() {
    alert("Player" + activePlayer + " won!");

    todisable(true);
    selectBlock([]);
  }
  function reset() {
    setGridArray([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    todisable(false);
    selectBlock([]);
  }
  function markedClick(row, column) {
    if (clickedBlocks.some((item) => item === `${row}${column}`)) {
      alert("Can't click here");
      return;
    }

    const newGridArray = gridArray.map((arrayValue) => [...arrayValue]);
    newGridArray[row][column] = activePlayer;
    setGridArray(newGridArray);
    for (let i = 0; i < 3; i++) {
      if (newGridArray[i].every((cell) => cell === activePlayer)) {
        youWon();
        return;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (newGridArray.every((row) => row[i] === activePlayer)) {
        youWon();
        return;
      }
    }

    let diagnolcheck = true;
    for (let i = 0; i < 3; i++) {
      if (newGridArray[i][i] !== activePlayer) {
        diagnolcheck = false;
        break;
      }
    }
    if (diagnolcheck) {
      youWon();
      return;
    }

    let revDiagnolcheck = true;
    for (let r = 0; r < 3; r++) {
      if (newGridArray[r][2 - r] !== activePlayer) {
        revDiagnolcheck = false;
        break;
      }
    }
    if (revDiagnolcheck) {
      youWon();
      return;
    }

    if (clickedBlocks.length >= 8) {
      alert("Match is draw :Play better");
      todisable(true);
    } else {
      let newClickedBlocks = [...clickedBlocks, `${row}${column}`];
      selectBlock(newClickedBlocks);

      console.log(...clickedBlocks);
      const newGridArray = gridArray.map((arrayValue) => [...arrayValue]);
      newGridArray[row][column] = activePlayer;
      setGridArray(newGridArray);
      setActivePlayer(activePlayer === "X" ? "0" : "X");
    }
  }

  return (
    <div>
      {gridArray.map((arrayValue, row) => (
        <div className="row" key={row}>
          {arrayValue.map((ArrayInnerValue, column) => (
            <button
              type="button"
              disabled={disabled}
              className="bg-dark text-white m p border border-primary"
              key={column}
              onClick={() => markedClick(row, column)}
              style={{ width: "90px", height: "90px" }}
            >
              <h1>{ArrayInnerValue}</h1>
            </button>
          ))}
        </div>
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
