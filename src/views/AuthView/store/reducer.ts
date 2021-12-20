import * as types from './actions';
import * as handlers from './handlers';

import type { TReducer, TReducerState } from './types';

const INITIAL_STATE: TReducerState = {
  data: {
    username: '',
    password: '',
  },
  errors: {},
  status: 'WAITING',
  timestamp: new Date().getTime(),
};

const Reducer: TReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.RESET_STATE:
      return { ...state, ...INITIAL_STATE };

    case types.UPDATE_STATE:
      return { ...state, ...payload, timestamp: new Date().getTime() };

    case types.SUBMIT_SENT:
      return { ...state, status: 'SUBMITTING', ...payload };

    case types.SUBMIT_SUCCEED:
      return { ...state, status: 'SUBMIT_SUCCEED', ...payload };

    case types.SUBMIT_FAILED:
      return { ...state, status: 'SUBMIT_FAILED', ...payload };

    case types.VALIDATION_FAILED:
      return { ...state, status: 'VALIDATION_FAILED', ...payload };

    default:
      return state;
  }
};

export default Reducer;

export { handlers, types, INITIAL_STATE };
