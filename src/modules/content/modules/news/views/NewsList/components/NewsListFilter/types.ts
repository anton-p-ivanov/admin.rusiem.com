import { TReducerData } from 'views/FormView/store/types';

export type TFilterResponse = {
  [key: string]: {
    value: TReducerData
  }
};

export type TUseHandlers = () => {
  apply: () => void;
  reset: () => void;
  fetch: () => void;
};
