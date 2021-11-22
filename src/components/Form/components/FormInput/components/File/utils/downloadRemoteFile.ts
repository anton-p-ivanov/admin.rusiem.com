import type { TFileInfo } from '../types';

const downloadRemoteFile = (data: string, fileInfo: TFileInfo): void => {
  const url = URL.createObjectURL(new Blob([data], { type: fileInfo.type }));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileInfo.name);
  document.body.appendChild(link);
  link.click();
};

export default downloadRemoteFile;
