import { createContext } from 'react';

interface User {
  username: string;
  // Otras propiedades del usuario según sea necesario
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
