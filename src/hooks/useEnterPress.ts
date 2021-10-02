import React, { useEffect } from "react";

function useEnterPress(input: any) {
  useEffect(() => {
    const onKeypress = (e: any) => {
      if (e.charCode === 13) {
        e.preventDefault();
        console.log(input.value);
      }
    };

    document.addEventListener("keypress", onKeypress);

    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, [input]);
}

export default useEnterPress;
