import type { AuthContextType } from '@/types';
import { createContext, use } from 'react';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { default as AuthProvider } from './AuthProvider';
