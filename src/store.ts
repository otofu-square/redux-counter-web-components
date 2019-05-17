import { createStore, combineReducers } from "redux";
import { counterReducer, CounterState } from "~/src/modules/counter";

type ReduxState = {
  counter: CounterState;
};

const rootReducer = combineReducers<ReduxState>({
  // @ts-ignore
  counter: counterReducer
});

export const store = createStore(rootReducer);
