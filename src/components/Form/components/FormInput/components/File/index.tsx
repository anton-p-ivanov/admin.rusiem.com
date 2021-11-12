import React from 'react';

import Text from '../Text';

import type { TFileProps } from './types';

import './styles.scss';

const File = React.forwardRef<HTMLInputElement, TFileProps>(({ field }, ref) => (
  <Text field={{ ...field, type: 'file' }} ref={ref} />
));

File.displayName = 'File';

export default File;
