import React from 'react';

export type TUseHandlers = {
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
  confirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type TConfirmViewProps = {
  description: string;
  endpoint: string;
};
