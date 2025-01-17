import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { customIncrement, decrement, increment, reset } from './counter.action';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.count,
    };
  })
);

export function counterReducer(
  state: { counter: number } | undefined,
  action: Action<string>
) {
  return _counterReducer(state, action);
}
