import type { TFormViewReducer } from 'views/FormView/types';
import type { TListViewReducer } from 'views/ListView/types';

export type TReducers = {
  formView: TFormViewReducer;
  listView: TListViewReducer;
};

export type TStoreContext = TReducers;
