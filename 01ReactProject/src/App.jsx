
import { useState } from "react";

function App() {

  const [range,setRange]=useState(0);
  return (
    <>
    <div>
    <input type="range"
    min={0}
    max={100}
    onChange={(e)=>setRange(e.target.value)}
    />
    <label>Range : {range}</label>
    </div>
    </>
  )
}

export default App
