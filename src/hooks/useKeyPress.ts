import React, { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { countLimits } from "../features/counter/bank";

function useKeyPress(numbers: any) {
  const dispatch = useAppDispatch();

  const onKeypress = (e: any) => {
    if (e.charCode === 13) {
      e.preventDefault();
      dispatch(countLimits({ number: +numbers }));
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", onKeypress);

    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, [numbers]);
}

export default useKeyPress;
