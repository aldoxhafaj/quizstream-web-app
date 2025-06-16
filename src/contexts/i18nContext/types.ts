import type { Language } from '@quizstream/types/i18n';
import type { ReactNode } from 'react';

export type I18nContextProps = {
  language: Language;
  changeAppLanguage: (language: Language) => void;
};

export type IntlProviderProps = {
  children: ReactNode;
};
