import engMessages from '@quizstream/i18n/en/messages.json';
import alMessages from '@quizstream/i18n/sqal/messages.json';
import { Language } from '@quizstream/types/i18n';

type CompiledMessages = Record<string, string>;

export const DEFAULT_LANGUAGE = Language.SQ_AL;
export const MESSAGES: Record<Language, CompiledMessages> = {
  [Language.SQ_AL]: alMessages,
  [Language.EN]: engMessages,
};
