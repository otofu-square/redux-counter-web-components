import { Action } from "redux";
import { actionTypes } from "./actionTypes";

const increment = (): Action => ({
  type: actionTypes.INCREMENT
});

const decrement = (): Action => ({
  type: actionTypes.DECREMENT
});

const reset = (): Action => ({
  type: actionTypes.RESET
});

export type Action =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

export const actions = {
  increment,
  decrement,
  reset
};
