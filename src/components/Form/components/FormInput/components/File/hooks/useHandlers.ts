import React, { useContext } from 'react';

import API from 'utils/api';

import Context, { FILE_INFO_INITIAL_STATE } from '../context';
import useUtils from './useUtils';

import type { AxiosRequestConfig } from 'axios';

type TUseHandlers = () => {
  downloadFile: (event: React.MouseEvent<HTMLButtonElement>) => void;
  deleteFile: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const useHandlers: TUseHandlers = () => {
  const { fileInfo, setFileInfo } = useContext(Context);
  const utils = useUtils();

  /**
   * Sends request to get file contents and download it.
   * @param event
   */
  const downloadFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const config: AxiosRequestConfig = {
      url: `/media/${fileInfo.uuid || 'unknown'}/download`,
      responseType: 'blob',
    };

    (async () => {
      const content = await API.request<string>(config);
      utils.downloadRemoteFile(content.data, fileInfo);
    })();
  };

  /**
   * Sends request to delete file.
   * @param event
   */
  const deleteFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const config: AxiosRequestConfig = {
      url: `/media/${fileInfo.uuid || 'unknown'}`,
      method: 'DELETE',
    };

    (async () => {
      const isDeleteSuccessful = await API.request(config);
      if (isDeleteSuccessful) {
        setFileInfo({ ...fileInfo, ...FILE_INFO_INITIAL_STATE });
      }
    })();
  };

  return {
    deleteFile,
    downloadFile,
  };
};

export default useHandlers;
