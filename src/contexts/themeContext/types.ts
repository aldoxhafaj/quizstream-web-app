import type { DarkColors, LightColors } from '@quizstream/themes/colors';
import type { Theme } from '@quizstream/types/theme';
import type { ReactNode } from 'react';

export type ThemeContextProps = {
  isDarkMode: boolean;
  colors: typeof DarkColors | typeof LightColors;
};

export type ThemeTogglerContextProps = {
  setThemeOption: (theme: Theme) => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};
