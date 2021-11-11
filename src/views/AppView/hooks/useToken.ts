import { useState } from 'react';

import jwt_decode, { JwtPayload } from 'jwt-decode';

type TUseTokenState = string | null;

type TUseToken = {
  token: TUseTokenState,
  setToken: (token: TUseTokenState) => void,
};

const useToken = (): TUseToken => {
  const [token, setToken] = useState<TUseTokenState>(
    localStorage.getItem('token'),
  );

  if (token) {
    const decodedToken = jwt_decode<JwtPayload>(token);
    if (decodedToken.exp && decodedToken.exp < Math.floor(new Date().getTime() / 1000)) {
      localStorage.removeItem('token');
      setToken(null);
    }
  }

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
