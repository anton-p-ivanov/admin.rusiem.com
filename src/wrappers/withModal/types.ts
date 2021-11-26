export type TModalProps = {
  [key: string]: unknown
};

export type TModalContext = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggle?: (value?: boolean, props?: any) => void;
  isVisible: boolean;
};
