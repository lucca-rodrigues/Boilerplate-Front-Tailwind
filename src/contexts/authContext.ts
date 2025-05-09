import { create } from 'zustand';
import Cookies from 'js-cookie';

interface User {
  name: string;
  email: string;
  id: string;
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: User | null;
  setToken: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get('auth-token') || null,
  isAuthenticated: !!Cookies.get('auth-token'),
  user: Cookies.get('user') ? JSON.parse(Cookies.get('user') || '{}') : null,
  setToken: (token: string, user: User) => {
    Cookies.set('auth-token', token);
    Cookies.set('user', JSON.stringify(user));
    set({ token, user, isAuthenticated: true });
  },
  logout: () => {
    Cookies.remove('auth-token');
    Cookies.remove('user');
    set({ token: null, user: null, isAuthenticated: false });
  },
}));
