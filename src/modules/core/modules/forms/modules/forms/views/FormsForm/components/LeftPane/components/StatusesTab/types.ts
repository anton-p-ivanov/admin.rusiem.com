import { TModalProps } from 'wrappers/withModal/types';

export type TStatusesTab = {
  toggleModal: (isVisible: boolean, propsValue?: TModalProps) => void;
};
