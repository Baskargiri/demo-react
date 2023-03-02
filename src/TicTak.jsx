import { useState } from "react";

function TicTak() {
  const board = [null, null, null, null, null, null, null, null, null];

  return (
    <div className='body'>
      <h1>NAMED FUNCTION</h1>
      <div className="brd">  
       {board.map(() => (
        <Gameout />
      ))}</div>
    </div>
  );
}
export { TicTak };

export function Gameout() {
  const [val, setVal] = useState("");
  const sty = {
    color: val === "x"
      ? "green" : "red"
  };
  return (
    <div style={sty} className="outline" onClick={() => setVal("x")}>{val}
    </div>

  );
}
