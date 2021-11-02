import { createContext } from "react";
import { firebase } from "@project/shared";

type ContextProps = {
  loading: boolean;
  user: firebase.User | null;
  authenticated: boolean;
  isOnVerification: boolean;
  setIsOnVerification: any;
  setUser: any;
};

export const AuthContext = createContext<Partial<ContextProps>>({});

type AuthProviderProps = {
  loading: boolean;
  user: any | null;
  setUser: any;
  isOnVerification: boolean;
  setIsOnVerification: any;
  children: React.ReactNode;
};

export const AuthProvider = (props: AuthProviderProps) => {
  const {
    loading,
    user,
    setUser,
    isOnVerification,
    setIsOnVerification,
    children,
  } = props;
  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        authenticated: user !== null,
        isOnVerification,
        setIsOnVerification,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
