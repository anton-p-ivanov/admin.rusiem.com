import type { TDataFormStatus } from '@forms/config/types';
import type { TModalProps } from 'wrappers/withModal/types';

export type TStatusesList = {
  data: TDataFormStatus[];
  toggleModal?: (isVisible: boolean, propsValue?: TModalProps) => void;
};

export type TStatusesListContext = {
  toggleConfirm?: (isVisible: boolean, propsValue?: TModalProps) => void;
  toggleModal?: (isVisible: boolean, propsValue?: TModalProps) => void;
};

export type TUseHandlers = (data?: TDataFormStatus) => {
  update: () => void,
  delete: () => void,
};
