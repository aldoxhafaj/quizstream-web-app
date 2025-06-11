import type { UserRole } from '@quizstream/types/user';
import type { ReactNode } from 'react';

export type SecureRouteProps = {
  children: ReactNode;
  authorizedRoles: UserRole[];
};
