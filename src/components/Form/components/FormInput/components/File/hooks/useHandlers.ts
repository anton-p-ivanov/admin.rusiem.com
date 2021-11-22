import React, { useContext } from 'react';

import API from 'utils/api';

import Context, { FILE_INFO_INITIAL_STATE } from '../context';
import * as utils from '../utils';

import type { TFileInfo } from '../types';
import type { AxiosRequestConfig } from 'axios';
import type { TFormField } from 'components/Form/types';

type TUseHandlers = (fileInfo: TFileInfo) => {
  uploadFile: (file: File, field: TFormField<TFileInfo>) => void;
  downloadFile: (event: React.MouseEvent<HTMLButtonElement>) => void;
  deleteFile: (event: React.MouseEvent<HTMLButtonElement>) => void;
  requestImagePreview: (field: TFormField<TFileInfo>) => Promise<string>;
  getImageProps: (file: File) => void;
};

const useHandlers: TUseHandlers = (fileInfo) => {
  const { setFileInfo } = useContext(Context);

  const downloadFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const config: AxiosRequestConfig = {
      url: `/media/${fileInfo.uuid || 'unknown'}/download`,
      responseType: 'blob',
    };

    API.request<string>(config)
      .then((response) => {
        utils.downloadRemoteFile(response.data, fileInfo);
      })
      .catch((error) => { throw error; });
  };

  const deleteFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const config: AxiosRequestConfig = {
      url: `/media/${fileInfo.uuid || 'unknown'}`,
      method: 'DELETE',
    };

    API.request(config)
      .then((response) => {
        if (response.data === null) {
          setFileInfo({ ...fileInfo, ...FILE_INFO_INITIAL_STATE });
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const requestImagePreview = async (field: TFormField<TFileInfo>) => {
    const config: AxiosRequestConfig = {
      url: `/media/${field.value?.uuid || 'unknown'}/preview`,
    };

    return (await API.request<string>(config)).data;
  };

  const getImageProps = (file: File) => {
    utils.getImageProps(file)
      .then((dimensions) => {
        setFileInfo({
          name: file.name,
          type: file.type,
          size: file.size,
          image: dimensions,
        });
      })
      .catch((error) => { throw error; });
  };

  const uploadFile = (file: File, field: TFormField<TFileInfo>) => {
    utils.uploadFile(file)
      .then((data) => {
        if (typeof field.onChange === 'function') {
          field.onChange(data);
        }
      })
      .catch((error) => { throw error; });
  };

  return {
    deleteFile,
    downloadFile,
    requestImagePreview,
    getImageProps,
    uploadFile,
  };
};

export default useHandlers;
