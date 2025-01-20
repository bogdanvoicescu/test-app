import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    console.log("Logging in with", credentials);
    setUser(
      { 
        email: credentials.email, 
        role: credentials.role 
      }
    );
  };

  const logout = (credentials) => {
    console.log("logout in with", credentials);
    setUser({ email: credentials.email, role: credentials.role });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);