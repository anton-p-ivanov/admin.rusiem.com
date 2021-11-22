import React, { useRef, useState } from 'react';

import { FileInfo, FileInput, FileSelect } from './components';
import Context, { FILE_INFO_INITIAL_STATE } from './context';

import type { TFileProps, TFileInfo } from './types';
import './styles.scss';

const File: React.FC<TFileProps> = ({ field }) => {
  const [fileInfo, setFileInfo] = useState<TFileInfo>(FILE_INFO_INITIAL_STATE);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Context.Provider value={{ fileInfo, setFileInfo, ref }}>
      <FileSelect />
      <FileInput field={field} />
      {fileInfo.name && (
        <div className="form__hint">
          <FileInfo />
        </div>
      )}
    </Context.Provider>
  );
};

export default File;
