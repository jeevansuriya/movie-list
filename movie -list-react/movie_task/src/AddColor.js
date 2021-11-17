import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export function AddColor() {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["teal", "orange", "crimson"]);
  return (
    <section className="container">
      <div className="input-searchBox">
        <TextField value={color} onChange={(event) => setColor(event.target.value)} id="standard-basic" label="Enter a color" variant="standard" />
        <Button className="button" onClick={() => setColors([...colors, color])} variant="outlined">Add color</Button>
      </div>
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </section>
  );
}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "350px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
