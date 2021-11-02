import React from 'react';

type TButtonVariant = 'default' | 'primary' | 'success' | 'danger' | 'warning';

export type TButtonProps = {
  name?: string;
  variant?: TButtonVariant;
  isSubmit?: boolean;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
