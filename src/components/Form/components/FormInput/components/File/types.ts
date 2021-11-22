import React from 'react';

import type { TFormField } from 'components/Form/types';

export type TFileProps = {
  field: TFormField<TFileInfo>;
};

export type TFileImage = {
  width: number,
  height: number,
  src?: string
};

export type TFileInfo = {
  uuid?: string,
  size: number,
  name: string,
  type: string,
  image: TFileImage,
};

export type TFileContext = {
  fileInfo: TFileInfo;
  setFileInfo: (fileInfo: TFileInfo) => void;
  ref?: React.RefObject<HTMLInputElement>;
};

export type TGetImageProps = (file: File) => Promise<TFileImage>;
export type TUploadFileProps = (file: File) => Promise<TFileInfo>;
