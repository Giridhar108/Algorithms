import { Dispatch } from "react";

export interface Iinput {
  setNumbers: Dispatch<React.SetStateAction<number | string>>;
  setOpenInfo: Dispatch<React.SetStateAction<boolean>>;
  openInfo: boolean;
  numbersNumpad: {
    value: number | string;
    status: boolean;
  };
  deleteNum: boolean;
  setDeleteNum: Dispatch<React.SetStateAction<boolean>>;
}
