import { ThemeTogglerContext } from '@quizstream/contexts/themeContext/ThemeProvider';
import { useContext } from 'react';

export const useThemeToggler = () => {
  const context = useContext(ThemeTogglerContext);

  if (!context) {
    throw new Error('useThemeToggler must be used within ThemeProvider!');
  }

  return context;
};
