import type { Language } from '@quizstream/types/i18n';
import { StorageKey } from '@quizstream/types/storage';
import {
  DEFAULT_LANGUAGE,
  getAppLanguage,
  MESSAGES,
} from '@quizstream/utils/i18n';
import { addStorageItem } from '@quizstream/utils/storage';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { type I18nContextProps, type IntlProviderProps } from './types';

const I18nContext = createContext<I18nContextProps | null>(null);

const IntlProvider = ({ children }: IntlProviderProps) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const changeAppLanguage = useCallback((nextLanguage: Language) => {
    addStorageItem(StorageKey.LANGUAGE, nextLanguage);
    setLanguage(nextLanguage);
  }, []);

  const loadAppLanguage = useCallback(() => {
    const appLanguage = getAppLanguage();

    if (appLanguage) {
      changeAppLanguage(appLanguage);
    }
  }, [changeAppLanguage]);

  useEffect(() => {
    loadAppLanguage();
  }, [loadAppLanguage]);

  const value = useMemo(
    () => ({ language, changeAppLanguage }),
    [language, changeAppLanguage],
  );

  return (
    <I18nContext.Provider value={value}>
      <ReactIntlProvider
        messages={MESSAGES[language]}
        locale={language}
        defaultLocale={DEFAULT_LANGUAGE}
      >
        {children}
      </ReactIntlProvider>
    </I18nContext.Provider>
  );
};

export { I18nContext, IntlProvider };
