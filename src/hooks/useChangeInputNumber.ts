import React, { useEffect } from "react";
import { Iinput } from "../types/Iinput";

function useChangeInputNumber({
  numbersNumpad,
  deleteNum,
  input,
  setNumbers,
  setDeleteNum,
}: Iinput) {
  useEffect(() => {
    input.setValue(`${input.value}${numbersNumpad.value}`);
    setNumbers(+input.value);
  }, [numbersNumpad.status]);

  useEffect(() => {
    if (deleteNum) {
      input.setValue(`${input.value}`.slice(0, -1));
      setDeleteNum(false);
      setNumbers(+input.value);
    }
  }, [deleteNum]);

  useEffect(() => {
    setNumbers(+input.value);
  }, [input.value]);
}

export default useChangeInputNumber;
