import type { TDataMailTemplate } from '@mail/config/types';
import type { TDataEntity } from 'config/types';

export type TTemplatesListContextProps = {
  data: TDataEntity & TDataMailTemplate;
};
