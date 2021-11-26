export type TConfirmErrors = {
  [key: string]: string[];
};

export type TConfirmState = {
  isValid: boolean;
  description?: string;
  password?: string;
  endpoint?: string;
  data?: Record<string, unknown>;
  errors?: TConfirmErrors;
  onSuccess?: (response: Response) => void;
};

export type TConfirmContext = {
  state: TConfirmState;
  update: (state: TConfirmState) => void;
};
