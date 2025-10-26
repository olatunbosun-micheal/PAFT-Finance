import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: null;
  session: null;
  loading: boolean;
  signUp: () => Promise<{ error: null }>;
  signIn: () => Promise<{ error: null }>;
  signInWithOtp: () => Promise<{ error: null }>;
  verifyOtp: () => Promise<{ error: null }>;
  signOut: () => Promise<{ error: null }>;
  resetPassword: () => Promise<{ error: null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Mock auth functions that do nothing
  const signUp = async () => ({ error: null });
  const signIn = async () => ({ error: null });
  const signInWithOtp = async () => ({ error: null });
  const verifyOtp = async () => ({ error: null });
  const signOut = async () => ({ error: null });
  const resetPassword = async () => ({ error: null });

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signInWithOtp,
    verifyOtp,
    signOut,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
