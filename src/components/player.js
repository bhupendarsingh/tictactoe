import React, { useState } from 'react';
export default function Player({symbol,activePlayer,initialName }) {
  const[playerName, setPlayerName] = useState(initialName);
    const [buttonName,updateButton]=useState("Edit");
    const [click,saveValue]=useState(0);
    function handleChange(event){
      setPlayerName(event.target.value)
    }
    function editOrSave(){
     saveValue(!click);
     updateButton(preButtonValue=>preButtonValue==="Edit" ? preButtonValue="Save" :preButtonValue="Edit" );
        //alert(symbol);  
    }
    
  return (
    <li style={{ display: "flex", alignItems: "center", marginRight: 10, backgroundColor: symbol=== activePlayer? "red" : "transparent" }} >
    
    <input  disabled={!click} type="text" placeholder= {initialName}  onChange={handleChange} value={playerName}  style={{ marginRight: 10 }} />
      
    <h5><span style={{ marginRight: 10 }} >{symbol}</span></h5>
    <button type="button" onClick={editOrSave} style={{ marginRight: 10 }}>
      {buttonName}
    </button> 
    </li>
  );
}