import React from "react";
import { UseFormField } from "../hooks/useFormField";
import { Iinput } from "../types/Iinput";
import { useAppDispatch } from "../app/hooks";
import { countLimits } from "../features/counter/bank";
import useChangeInputNumber from "../hooks/useChangeInputNumber";

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

  useChangeInputNumber({
    numbersNumpad,
    deleteNum,
    input,
    setNumbers,
    setDeleteNum,
  });

  const handleOpenInfo = () => {
    setOpenInfo!(!openInfo);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(countLimits({ number: +input.value }));
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
