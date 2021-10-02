import React, { useState } from "react";
import { Inumpad } from "../types/Inumpad";

function Numpad({ setNumbersNumpad, setDeleteNum }: Inumpad) {
  const [state, setstate] = useState<any>({ value: "", status: true });

  const handleSetState = (value: number | string) => {
    setstate({ value, status: !state.status });
    setNumbersNumpad({ value, status: !state.status });
  };

  return (
    <div className="numpad">
      <div className="numpad__keys">
        <button onClick={() => handleSetState(1)}>1</button>
        <button onClick={() => handleSetState(2)}>2</button>
        <button onClick={() => handleSetState(3)}>3</button>
        <button onClick={() => handleSetState(4)}>4</button>
        <button onClick={() => handleSetState(5)}>5</button>
        <button onClick={() => handleSetState(6)}>6</button>
        <button onClick={() => handleSetState(7)}>7</button>
        <button onClick={() => handleSetState(8)}>8</button>
        <button onClick={() => handleSetState(9)}>9</button>
        <button onClick={() => handleSetState(0)}>0</button>
        <button onClick={() => handleSetState(".")}>.</button>
        <button onClick={() => setDeleteNum(true)}>Del</button>
      </div>
    </div>
  );
}

export default Numpad;
