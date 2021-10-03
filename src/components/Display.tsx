import React, { useState } from "react";
import useKeyPress from "../hooks/useKeyPress";
import { InumbersNumpad } from "../types/InumbersNumpad";
import Delivery from "./Delivery";
import Info from "./Info";
import Input from "./Input";
import Numpad from "./Numpad";

function Display() {
  const [numbers, setNumbers] = useState<number | string>("");
  const [openInfo, setOpenInfo] = useState(false);
  const [numbersNumpad, setNumbersNumpad] = useState<InumbersNumpad>({
    value: "",
    status: true,
  });
  const [deleteNum, setDeleteNum] = useState(false);

  useKeyPress(numbers);

  return (
    <div className="display">
      <div className="display__inner">
        <Info numbers={numbers} openInfo={openInfo} />
        <Input
          setNumbers={setNumbers}
          setOpenInfo={setOpenInfo}
          openInfo={openInfo}
          numbersNumpad={numbersNumpad}
          deleteNum={deleteNum}
          setDeleteNum={setDeleteNum}
        />
        <Delivery />
      </div>
      <Numpad setNumbersNumpad={setNumbersNumpad} setDeleteNum={setDeleteNum} />
    </div>
  );
}

export default Display;
