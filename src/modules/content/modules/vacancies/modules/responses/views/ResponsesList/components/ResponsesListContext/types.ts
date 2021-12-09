import type { TDataVacancyResponse } from '@vacancies/config/types';
import type { TDataEntity } from 'config/types';

export type TResponsesListContextProps = {
  data: TDataEntity & TDataVacancyResponse;
};
