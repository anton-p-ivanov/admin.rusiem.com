import React from 'react';

import type { TFileContext } from './types';

export const FILE_INFO_INITIAL_STATE = {
  image: { width: 0, height: 0 },
  size: 0,
  name: '',
  type: '',
};

export default React.createContext<TFileContext>({
  fileInfo: FILE_INFO_INITIAL_STATE,
  setFileInfo: () => null,
});
