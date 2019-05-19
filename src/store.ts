import { createStore, combineReducers } from "redux";
import { counterReducer, CounterState } from "~/src/modules/counter";
import { createConnect } from "~/src/utils/createConnect";

type ReduxState = {
  counter: CounterState;
};

const rootReducer = combineReducers<ReduxState>({
  // @ts-ignore
  counter: counterReducer
});

export const store = createStore(rootReducer);

export const connect = createConnect(store);
