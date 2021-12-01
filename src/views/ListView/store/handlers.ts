import * as types from './actions';

import type { TReducerAction, TReducerState } from './types';

const updateState = (payload: TReducerState): TReducerAction => ({
  type: types.UPDATE_STATE,
  payload,
});

const resetState = (): TReducerAction => ({
  type: types.RESET_STATE,
});

const fetchSent = (): TReducerAction => ({
  type: types.FETCH_SENT,
});

const fetchSucceed = (payload: TReducerState): TReducerAction => ({
  type: types.FETCH_SUCCEED,
  payload,
});

const fetchFailed = (): TReducerAction => ({
  type: types.FETCH_FAILED,
});

export {
  updateState,
  resetState,
  fetchSent,
  fetchSucceed,
  fetchFailed,
};
