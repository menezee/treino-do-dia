import React, { createContext, useState, useEffect } from 'react';
import base from './base.js';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    base.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider,
};