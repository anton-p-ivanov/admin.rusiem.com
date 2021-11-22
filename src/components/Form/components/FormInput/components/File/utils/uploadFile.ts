import API from 'utils/api';

import type { TFileInfo, TUploadFileProps } from '../types';
import type { AxiosError, AxiosRequestConfig } from 'axios';

const uploadFile: TUploadFileProps = (file: File) => new Promise((resolve, reject) => {
  const formData = new FormData();
  formData.append('file', file as Blob);

  const config: AxiosRequestConfig = {
    url: '/media/upload',
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  API.request<TFileInfo>(config)
    .then((response) => resolve(response.data))
    .catch((error: AxiosError) => reject(error));
});

export default uploadFile;
