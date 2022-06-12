import { FC, createContext, useState, useEffect, useCallback } from "react";

interface LoginValues {
  email: string;
  password: string;
}
interface AuthContextProps {
  isLoggedIn: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
});
export const AuthContextProvider: FC = (children: any) => {
  const userIsLoggedIn = true;

  const contextValue: AuthContextProps = {
    isLoggedIn: userIsLoggedIn,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
