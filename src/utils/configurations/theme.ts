import { Theme } from '@quizstream/types/theme';

export const getThemeMode = (themeOption: Theme) => {
  if (themeOption === Theme.AUTO) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Theme.DARK
      : Theme.LIGHT;
  }

  return themeOption;
};
