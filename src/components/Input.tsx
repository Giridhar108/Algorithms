import React, { Dispatch, useEffect } from "react";
import useKeyPress from "../hooks/useKeyPress";
import { UseFormField } from "../hooks/useFormField";
import { Iinput } from "../types/Iinput";
import { useAppDispatch } from "../app/hooks";
import { countLimits } from "../features/counter/bank";

function Input({
  setNumbers,
  setOpenInfo,
  openInfo,
  numbersNumpad,
  deleteNum,
  setDeleteNum,
}: Iinput) {
  const dispatch = useAppDispatch();

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
    dispatch(countLimits({ number: +input.value }));
    console.log(input.value);
  };

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
