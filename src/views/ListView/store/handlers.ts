import * as types from './actions';
import type { TReducerAction, TReducerState } from './types';

const updateState = (state: TReducerState): TReducerAction => ({
  type: types.UPDATE_STATE,
  payload: state,
});

const resetState = (): TReducerAction => ({
  type: types.RESET_STATE,
});

const fetchSent = (): TReducerAction => ({
  type: types.FETCH_SENT,
});

const fetchSucceed = (state: TReducerState): TReducerAction => ({
  type: types.FETCH_SUCCEED,
  payload: state,
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
