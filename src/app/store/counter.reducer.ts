import { createReducer, on } from '@ngrx/store';
import { decrement, increment, init, set } from './counter.action';

const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value ),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
  );

// alternate for creating reducers

// export function createReducer(state = initialState, action: any) {
//   if (action.type === '[Counter] Increment') {
//     return state + action.value
//   } else if (action.type === '[Counter] Decrement') {
//     return state - action.value
//   }
//   return state
// }