import type { StorageKey } from '@quizstream/types/storage';

export const addStorageItem = (key: StorageKey, value: string) => {
  return localStorage.setItem(key, value);
};

export const getStorageItem = <T>(key: StorageKey) => {
  return localStorage.getItem(key) as T;
};

export const deleteStorageItem = (key: StorageKey) => {
  return localStorage.removeItem(key);
};

export const clearStorage = () => {
  return localStorage.clear();
};
