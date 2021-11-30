import API from 'utils/api';

import type { TFileImage, TFileInfo } from '../types';
import type { AxiosRequestConfig } from 'axios';
import type { TFormField } from 'components/Form/types';

type TUseUtils = () => {
  uploadFile: (file: File, field: TFormField<TFileInfo>) => void;
  getImageProps: (file: File) => Promise<TFileImage>;
  downloadRemoteFile: (data: string, fileInfo: TFileInfo) => void;
  requestImagePreview: (uuid: string) => Promise<string>;
};

const useUtils: TUseUtils = () => {
  /**
   * Uploads file to remote server.
   *
   * @param file
   * @param field
   */
  const uploadFile = (file: File, field: TFormField<TFileInfo>): void => {
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

    (async () => {
      const response = await API.request<TFileInfo>(config);
      if (typeof field.onChange === 'function') {
        field.onChange(response.data);
      }
    })();
  };

  /**
   * Requests image preview data-url than can be used in
   * `src` attribute of `img` tag.
   *
   * @param uuid
   */
  const requestImagePreview = async (uuid: string): Promise<string> => {
    const config: AxiosRequestConfig = {
      url: `/media/${uuid}/preview`,
    };

    return (await API.request<string>(config)).data;
  };

  /**
   * Returns image width, height and src attributes.
   *
   * @param file
   */
  const getImageProps = (file: File) => new Promise<TFileImage>((resolve, reject) => {
    const reader = new FileReader();
    const image = new Image();

    reader.readAsDataURL(file);
    reader.onload = ({ target }) => {
      image.src = target?.result as string;
      image.onload = () => {
        const width = image.naturalWidth;
        const height = image.naturalHeight;

        resolve({ width, height, src: image.src });
      };
    };

    reader.onerror = () => {
      reject(new Error('Could not get image dimensions. Not an image?'));
    };
  });

  const downloadRemoteFile = (data: string, fileInfo: TFileInfo): void => {
    const url = URL.createObjectURL(new Blob([data], { type: fileInfo.type }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileInfo.name);
    document.body.appendChild(link);
    link.click();
  };

  return {
    uploadFile,
    getImageProps,
    downloadRemoteFile,
    requestImagePreview,
  };
};

export default useUtils;
