import React, { Dispatch, useEffect } from "react";
import useEnterPress from "../hooks/useEnterPress";
import { UseFormField } from "../hooks/useFormField";
import { Iinput } from "../types/Iinput";

function Input({
  setNumbers,
  setOpenInfo,
  openInfo,
  numbersNumpad,
  deleteNum,
  setDeleteNum,
}: Iinput) {
  const input = UseFormField();

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

  const handleOpenInfo = () => {
    setOpenInfo(!openInfo);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input.value);
  };

  useEnterPress(input);

  return (
    <div className="input">
      <form className="input__form" onSubmit={handleSubmit}>
        <input type="text" value={input.value} onChange={input.onChange} />
        <button className="input__btn">Выдача</button>
      </form>
      <button className="input__balance-btn" onClick={handleOpenInfo}>
        Остаток
      </button>
    </div>
  );
}

export default Input;
