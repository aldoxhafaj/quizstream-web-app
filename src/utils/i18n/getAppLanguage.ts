import type { Language } from '@quizstream/types/i18n';
import { StorageKey } from '@quizstream/types/storage';
import { getStorageItem } from '@quizstream/utils/storage';

export const getAppLanguage = () => {
  return getStorageItem<Language>(StorageKey.LANGUAGE);
};
