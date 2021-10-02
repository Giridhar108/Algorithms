import { Dispatch } from "react";

export interface Inumpad {
  setNumbersNumpad: Dispatch<
    React.SetStateAction<{
      value: number | string;
      status: boolean;
    }>
  >;
  setDeleteNum: Dispatch<React.SetStateAction<boolean>>;
}
