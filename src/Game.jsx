import { useState } from 'react';

function Game() {
  const [col, setCol] = useState("pink");
  const styles = {
    background: col,
  };
  const [bg, setBg] = useState([]);
  const sty = {
    background: bg,
  };
  return (
    <div>
      <input style={styles} type="text" placeholder='Enter a color' onChange={(e) => setCol(e.target.value)}
        value={col}></input>
      <button onClick={() => setBg([...bg, col])}>Add color</button>
      {/* {col.map((e)=><ColorBox color={col} />)} */}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    heigth: "50px",
    width: "80px",
    background: color,
    margin: "5px,0px",
  };
  return (
    <div style={styles}>  .</div>
  );
}

export{Game}
