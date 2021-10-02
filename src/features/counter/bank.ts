import { createSlice } from "@reduxjs/toolkit";
import { variantsLimit } from "../../data/variantsLimit";
import getLimits from "../../helpers/getLimits";

interface Ibank {
  limits: {};
  balance: number;
  variantsLimit: any[];
  status: string;
}

const initialState: Ibank = {
  limits: {},
  balance: 0,
  variantsLimit: variantsLimit,
  status: "ok",
};

export const counterSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    setLimitsDefault: (state: any) => {
      state.limits = state.variantsLimit[0];
      state.balance = Object.entries(state.limits).reduce(
        (acc, el: any) => acc + el[1] * el[0],
        0
      );
    },
    setLimitCustom: (state: any, action) => {
      state.limits = state.variantsLimit[action.payload.number];
      state.balance = Object.entries(state.limits).reduce(
        (acc, el: any) => acc + el[1] * el[0],
        0
      );
    },
    countLimits: (state, action) => {
      state.balance = Object.entries(state.limits).reduce(
        (acc, el: any) => acc + el[1] * el[0],
        0
      );
      if (action.payload.number > state.balance) {
        state.status = "нет столько денег";
      } else if (action.payload.number % 50 !== 0) {
        state.status = "вводите суммы кратные 50";
      } else {
        console.log("act");
        state.status = "ok";
        state.limits = {
          ...state.limits,
          ...getLimits(action.payload.number, state.limits),
        };
        state.balance = Object.entries(state.limits).reduce(
          (acc, el: any) => acc + el[1] * el[0],
          0
        );
      }
    },
  },
});

export const { setLimitsDefault, setLimitCustom, countLimits } =
  counterSlice.actions;

export default counterSlice.reducer;
