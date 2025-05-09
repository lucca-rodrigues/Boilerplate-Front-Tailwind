import { create } from 'zustand';

interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  sidebar: {
    background: string;
    text: string;
    activeBackground: string;
    activeText: string;
    hoverBackground: string;
    hoverText: string;
  };
}

interface ThemeState {
  colors: ThemeColors;
}

export const useThemeStore = create<ThemeState>(() => ({
  colors: {
    primary: '#8B5CF6',
    secondary: '#9D6EF7',
    background: '#F1F5F9',
    text: '#111827',
    sidebar: {
      background: '#FFFFFF',
      text: '#666666',
      activeBackground: '#9333EA',
      activeText: '#FFFFFF',
      hoverBackground: '#F5F5F5',
      hoverText: '#333333',
    },
  },
}));
