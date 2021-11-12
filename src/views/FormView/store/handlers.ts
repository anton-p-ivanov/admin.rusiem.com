import * as types from './actions';

import type {
  TReducerAction,
  TReducerData,
  TReducerErrors,
  TReducerState,
} from './types';

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

const fetchSucceed = (payload: TReducerState): TReducerAction => ({
  type: types.FETCH_SUCCEED,
  payload,
});

const fetchFailed = (payload: TReducerState): TReducerAction => ({
  type: types.FETCH_FAILED,
  payload,
});

const submitSent = (payload: TReducerData): TReducerAction => ({
  type: types.SUBMIT_SENT,
  payload: { data: payload, errors: {} } as TReducerState,
});

const submitSucceed = (payload: TReducerData): TReducerAction => ({
  type: types.SUBMIT_SUCCEED,
  payload: { data: payload } as TReducerState,
});

const submitFailed = (payload: TReducerErrors): TReducerAction => ({
  type: types.SUBMIT_FAILED,
  payload: { errors: payload } as TReducerState,
});

export {
  updateState,
  resetState,

  fetchSent,
  fetchSucceed,
  fetchFailed,

  submitSent,
  submitSucceed,
  submitFailed,
};
