import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  ReactElement,
} from "react";

const authContext = React.createContext();

export function useAuth() {
  return useContext(authContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [userType, setUserType] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const setUser = (string) => {
    setUserType(string);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();

      parseRes == true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getType() {
    try {
      const response = await fetch("http://localhost:5000/auth/user-type", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();

      parseRes == "employee" ? setUserType("employee") : setUserType("member");
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    isAuth();
    getType();
    setIsLoading(false);
  }, []);

  const value = {
    userType,
    setUser,
    isAuthenticated,
    setAuth,
    isLoading,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
