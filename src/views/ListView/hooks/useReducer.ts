import React from 'react';

import type { AxiosRequestConfig } from 'axios';

import { Utils } from 'utils';

import Reducer, { handlers, INITIAL_STATE } from '../store/reducer';
import type { TReducerData, TReducerState } from '../store/types';
import type { TListViewReducer, TListViewRequestConfig } from '../types';
import useReducerHandlers from './useReducerHandlers';

/**
 * ListView component useReducer hook provides its state and state update methods.
 * @param initialState
 */
const useReducer = (initialState?: TReducerState): TListViewReducer => {
  const [state, dispatch] = React.useReducer(Reducer, initialState || INITIAL_STATE);
  const { requestSucceed, requestFailed } = useReducerHandlers(state, dispatch);

  /**
   * Updates state with data provided
   * @param reducerState
   */
  const update = (reducerState: TReducerState) => {
    dispatch(handlers.updateState(reducerState));
  };

  /**
   * Updates state timestamp property only
   */
  const refresh = () => {
    dispatch(handlers.updateState({ ...state, timestamp: new Date().getTime() }));
  };

  /**
   * Updates ListView state with data fetched from server.
   * @param config
   */
  const request = (config: TListViewRequestConfig) => {
    dispatch(handlers.fetchSent());

    const searchParams: Record<string, string> = {
      page: state.pagination.page.toString(),
      size: state.pagination.size.toString(),
      sort: (state.sort.sortOrder === 'DESC' ? '-' : '') + state.sort.sortBy,
    };

    const requestUrl = new URL(config.endpoint);
    Object.keys(searchParams).forEach((key) => {
      requestUrl.searchParams.append(key, searchParams[key]);
    });

    const axiosConfig: AxiosRequestConfig = {
      method: 'GET',
      url: requestUrl.href,
    };

    Utils.API.request<TReducerData[]>(axiosConfig).then(requestSucceed).catch(requestFailed);
  };

  return {
    state,
    update,
    refresh,
    request,
  };
};

export default useReducer;
