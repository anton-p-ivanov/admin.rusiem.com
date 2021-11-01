import { useState } from 'react';

type TUseTokenState = string | null;

type TUseToken = {
  token: TUseTokenState,
  setToken: (token: TUseTokenState) => void,
};

const useToken = (): TUseToken => {
  const [token, setToken] = useState<TUseTokenState>(
    localStorage.getItem('token'),
  );

  return {
    token,
    setToken: (value: TUseTokenState) => {
      localStorage.setItem('token', value || '');
      localStorage.removeItem('tokenExpired');
      setToken(value);
    },
  };
};

export default useToken;
