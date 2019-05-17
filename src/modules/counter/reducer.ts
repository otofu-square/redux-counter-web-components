import { Action } from "./actions";
import { actionTypes } from "./actionTypes";

export type State = {
  count: number;
};

const initialState = {
  count: 0
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET:
      return { ...state, count: initialState.count };
    default:
      return state;
  }
};
