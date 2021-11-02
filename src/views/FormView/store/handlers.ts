import * as Types from './actions';

import type { TReducerAction, TReducerState } from './types';

const updateState = (state: TReducerState): TReducerAction => ({
  type: Types.UPDATE_STATE,
  payload: state,
});

const resetState = (): TReducerAction => ({
  type: Types.RESET_STATE,
});

export {
  updateState,
  resetState,
};
