import type { Theme } from '@quizstream/types/theme';
import type { ReactNode } from 'react';

export type ThemeContextProps = {
  isDarkMode: boolean;
};

export type ThemeTogglerContextProps = {
  setThemeOption: (theme: Theme) => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};
