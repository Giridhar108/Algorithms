import { createSlice } from "@reduxjs/toolkit";
import { variantsLimit } from "../../data/variantsLimit";
import getLimits from "../../helpers/getLimits";
import { Ibank } from "../../types/IBank";

const initialState: Ibank = {
  limits: {},
  balance: 0,
  delivery: [],
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
        console.log(action.payload.number, state.balance);
        state.status = "нет столько денег";
      } else if (action.payload.number % 50 !== 0) {
        state.status = "вводите суммы кратные 50";
      } else {
        const resultLimit = getLimits(action.payload.number, state.limits);
        console.log(resultLimit)
        state.delivery = resultLimit && Object.entries(resultLimit).reduce((acc: any, el: any) => {
          if (state.limits[`${el[0]}`] !== el[1]) {
            return [...acc, [el[0], state.limits[`${el[0]}`] - el[1]]]
          }
          return acc
        }, [])
        state.status = "ok";
        state.limits = {
          ...state.limits,
          ...resultLimit,
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
