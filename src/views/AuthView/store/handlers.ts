import * as types from './actions';

import type {
  TReducerAction,
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

const submitSent = (): TReducerAction => ({
  type: types.SUBMIT_SENT,
  payload: { errors: {} } as TReducerState,
});

const submitSucceed = (): TReducerAction => ({
  type: types.SUBMIT_SUCCEED,
});

const submitFailed = (payload: TReducerErrors): TReducerAction => ({
  type: types.SUBMIT_FAILED,
  payload: { errors: payload } as TReducerState,
});

export {
  updateState,
  resetState,

  submitSent,
  submitSucceed,
  submitFailed,
};
