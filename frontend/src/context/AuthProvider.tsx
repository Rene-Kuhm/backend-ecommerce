// AuthProvider.tsx
import React, { useState, useEffect, ReactNode } from 'react';
import { AuthContext, AuthContextType } from './AuthContext';


interface AuthProviderProps {
  children: ReactNode;
}




export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthContextType['user'] | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user: AuthContextType['user']) => {
    setIsAuthenticated(true);
    setUser(user);
    localStorage.setItem('token', 'your-token'); // Ajusta esto según tu lógica de token
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
