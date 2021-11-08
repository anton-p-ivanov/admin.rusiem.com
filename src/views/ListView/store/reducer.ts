import * as types from './actions';
import * as handlers from './handlers';
import type { TReducer, TReducerState } from './types';

const INITIAL_STATE: TReducerState = {
  status: 'WAITING',
  data: [],
  pagination: {
    page: 1,
    size: 20,
    total: 0,
  },
  sort: {
    sortBy: 'updatedAt',
    sortOrder: 'DESC',
  },
  isFiltered: false,
  timestamp: new Date().getTime(),
};

const Reducer: TReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.RESET_STATE:
      return { ...state, ...INITIAL_STATE };

    case types.UPDATE_STATE:
      return { ...state, ...payload };

    case types.FETCH_SENT:
      return { ...state, status: 'FETCHING' };

    case types.FETCH_SUCCEED:
      return { ...state, status: 'FETCH_SUCCEED', ...payload };

    case types.FETCH_FAILED:
      return { ...state, status: 'FETCH_FAILED' };

    default:
      return state;
  }
};

export default Reducer;

export { handlers, types, INITIAL_STATE };
