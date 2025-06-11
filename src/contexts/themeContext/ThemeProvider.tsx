import { StorageKey } from '@quizstream/types/storage';
import { Theme } from '@quizstream/types/theme';
import { getThemeMode } from '@quizstream/utils/configurations';
import { addStorageItem, getStorageItem } from '@quizstream/utils/storage';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  type ThemeContextProps,
  type ThemeProviderProps,
  type ThemeTogglerContextProps,
} from './types';

const ThemeContext = createContext<ThemeContextProps | null>(null);
const ThemeTogglerContext = createContext<ThemeTogglerContextProps | null>(
  null,
);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const storageThemeOption =
    getStorageItem<Theme>(StorageKey.THEME) ?? Theme.AUTO;
  const initialTheme = getThemeMode(storageThemeOption);

  const [appTheme, setAppTheme] = useState(initialTheme);

  const setThemeOption = useCallback((theme: Theme) => {
    addStorageItem(StorageKey.THEME, theme);
    const selectedTheme = getThemeMode(theme);
    setAppTheme(selectedTheme);
  }, []);

  useEffect(() => {
    if (storageThemeOption === Theme.AUTO) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      mediaQuery.addEventListener('change', (e) =>
        setAppTheme(e.matches ? Theme.DARK : Theme.LIGHT),
      );

      return () =>
        mediaQuery.removeEventListener('change', (e) =>
          setAppTheme(e.matches ? Theme.DARK : Theme.LIGHT),
        );
    }
  }, [storageThemeOption]);

  const themeTogglerValues = useMemo(
    () => ({ setThemeOption }),
    [setThemeOption],
  );

  const isDarkMode = appTheme === Theme.DARK;
  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      <ThemeTogglerContext.Provider value={themeTogglerValues}>
        <div className={isDarkMode ? Theme.DARK : Theme.LIGHT}>{children}</div>
      </ThemeTogglerContext.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, ThemeTogglerContext };
