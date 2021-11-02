import * as types from './actions';
import * as handlers from './handlers';

import type { TReducer, TReducerState } from './types';

const INITIAL_STATE: TReducerState = {
  data: {},
  errors: {},
  isUpdated: false,
  status: 'WAITING',
  timestamp: new Date().getTime(),
};

const Reducer: TReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.RESET_STATE:
      return { ...state, INITIAL_STATE };

    case types.UPDATE_STATE:
      return { ...state, ...payload, timestamp: new Date().getTime() };

    default:
      return state;
  }
};

export default Reducer;

export { handlers, types, INITIAL_STATE };
