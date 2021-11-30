import React from 'react';

type TButtonVariant = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'link';
type TButtonSize = 'default' | 'small' | 'large';

export interface TButtonProps {
  name?: string;
  size?: TButtonSize;
  variant?: TButtonVariant;
  isSubmit?: boolean;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
