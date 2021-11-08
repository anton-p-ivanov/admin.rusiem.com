import * as types from './actions';
import type { TReducerAction, TReducerState } from './types';

const updateState = (state: TReducerState): TReducerAction => ({
  type: types.UPDATE_STATE,
  payload: state,
});

const resetState = (): TReducerAction => ({
  type: types.RESET_STATE,
});

export {
  updateState,
  resetState,
};
