import { Action } from "./actions";
import { State } from "./reducer";

export type CounterAction = Action;
export type CounterState = State;

export { actions as counterActions } from "./actions";
export { actionTypes as counterActionTypes } from "./actionTypes";
export { reducer as counterReducer } from "./reducer";
