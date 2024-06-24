// context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    router.push('/login');
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
