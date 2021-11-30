import { useContext } from 'react';

import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import API from 'utils/api';
import { useStore as useFormViewStore } from 'views/FormView/store';
import { useStore as useListViewStore } from 'views/ListView/store';
import Context from 'wrappers/withOffCanvas/context';

import type { TFilterResponse, TUseHandlers } from '../types';

const useHandlers: TUseHandlers = () => {
  const param = 'content.news.filter';

  const formView = useFormViewStore();
  const listView = useListViewStore();
  const { toggle } = useContext(Context);

  /**
   * Send filter data to API server.
   */
  const submitFilter = (method: Method) => {
    const config: AxiosRequestConfig = {
      url: '/user/params',
      method,
      data: { param, value: formView.state.data },
    };

    const successHandler = () => {
      if (toggle) toggle();
      if (method === 'DELETE') formView.reset();

      listView.refresh();
    };

    const errorHandler = () => formView.reset();

    API.request(config).then(successHandler).catch(errorHandler);
  };

  const applyFilter = () => {
    submitFilter('PATCH');
  };

  const resetFilter = () => {
    submitFilter('DELETE');
  };

  /**
   * Fetch filter params from API server.
   */
  const fetchFilter = () => {
    const config: AxiosRequestConfig = {
      url: '/user/params',
      method: 'GET',
    };

    const successHandler = (response: AxiosResponse<TFilterResponse>) => {
      if (param in response.data) {
        const data = response.data[param].value;
        formView.update({ ...formView.state, data });
      }
    };

    const errorHandler = () => formView.reset();

    API
      .request<TFilterResponse>(config)
      .then(successHandler)
      .catch(errorHandler);
  };

  return {
    apply: applyFilter,
    reset: resetFilter,
    fetch: fetchFilter,
  };
};

export default useHandlers;
