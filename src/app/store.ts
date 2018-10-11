import { INCREMENT, DECREMENT, RESET, ADD_COUNTER, REMOVE_COUNTER } from './actions';
import { Counter } from './counter';

export interface IAppState {
  counters: Counter[];
}
// export interface IAppState {
//   counter : number;
// }

export const INITIAL_STATE: IAppState = {
  counters: [
    {
      id: 0,
      counter: 0,
      isEnabled: true
    }
  ]
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        counters: [...state.counters, { id: state.counters.length, counter: 0, isEnabled: true }]
      };
    case REMOVE_COUNTER:
      return {
        counters: [...state.counters.slice(0,action.index),
          { id: action.index, counter: (state.counters[action.index]).counter, isEnabled: false },
           ...state.counters.splice(action.index + 1)]
      };
    case INCREMENT:
      return {
        counters: [...state.counters.slice(0, action.index),
        { id: action.index, counter: (state.counters[action.index]).counter + 1, isEnabled:true },
        ...state.counters.splice(action.index + 1)
        ]
      };
    case DECREMENT:
      return {
        counters: [...state.counters.slice(0, action.index),
        { id: action.index, counter: (state.counters[action.index]).counter - 1, isEnabled:true },
        ...state.counters.splice(action.index + 1)
        ]
      };
    case RESET:
      return {
        counters: [...state.counters.slice(0, action.index),
        { id: action.index, counter: INITIAL_STATE.counters[0].counter, isEnabled:true },
        ...state.counters.splice(action.index + 1)
        ]
      };

    default:
      return state;
  }
}
// export function rootReducer(state: IAppState, action): IAppState {
//   switch (action.type) {
//     case INCREMENT: return { counter: state.counter + 1 };
//     case DECREMENT: return { counter: state.counter - 1 };
//     case RESET: return { counter: INITIAL_STATE.counter };
//   }
//   return state;
// }