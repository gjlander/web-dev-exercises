import { useState } from 'react';
import { AuthContext } from '.';
import { me } from '@/data';

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [checkSession, setCheckSession] = useState(true);
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setCheckSession, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
