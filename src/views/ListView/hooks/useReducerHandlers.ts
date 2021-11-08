import type { AxiosResponse } from 'axios';

import { handlers } from '../store/reducer';
import type { TReducerAction, TReducerData, TReducerState } from '../store/types';
import type { TListViewPagination } from '../types';

type TUseReducerHandlers = (
  state: TReducerState,
  dispatch: React.Dispatch<TReducerAction>,
) => {
  requestSucceed: (response: AxiosResponse<TReducerData[]>) => void;
  requestFailed: () => void;
};

/**
 * ListView useReducer handlers.
 * @param state
 * @param dispatch
 */
const useReducerHandlers: TUseReducerHandlers = (state, dispatch) => {
  const requestSucceed = (response: AxiosResponse<TReducerData[]>) => {
    const pagination: TListViewPagination = {
      total: parseInt(response.headers['x-pagination-total'], 10),
      size: parseInt(response.headers['x-pagination-size'], 10),
      page: parseInt(response.headers['x-pagination-page'], 10),
    };

    const isFiltered: boolean = response.headers['x-results-filtered'] === '1';

    // Dispatch fetch succeed action
    dispatch(
      handlers.fetchSucceed({
        ...state,
        data: response.data,
        pagination,
        isFiltered,
      }),
    );
  };

  const requestFailed = () => {
    dispatch(handlers.fetchFailed());
  };

  return {
    requestSucceed,
    requestFailed,
  };
};

export default useReducerHandlers;
