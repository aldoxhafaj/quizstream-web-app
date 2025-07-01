import { UserRole } from '@quizstream/types/user';

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const ONE_UPPERCASE_LETTER_REGEX = /[A-Z]/;

export const CAROUSEL_SLIDE_AUTOPLAY_DURATION = 5000;

/** TODO this will be taked from useAuth context hook */
export const LOGGED_USER_ROLE = UserRole.ADMIN;
