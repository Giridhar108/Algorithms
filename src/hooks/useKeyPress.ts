import React, { useEffect } from "react";

function useKeyPress(numbers: any) {
  const onKeypress = (e: any) => {
    console.log(e);
    if (e.charCode === 13) {
      e.preventDefault();
      console.log(numbers);
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
