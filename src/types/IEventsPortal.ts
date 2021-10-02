import { Dispatch } from "react";

export interface IEventsPortal {
  active: boolean;
  setActive: Dispatch<React.SetStateAction<boolean>>;
}
