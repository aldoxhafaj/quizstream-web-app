import { UserRole } from '@quizstream/types/user';
import { Navigate } from 'react-router';

import type { SecureRouteProps } from './types';

/** TODO this will be taked from useAuth context hook */
const LOGGED_USER_ROLE = UserRole.ADMIN;
export const SecureRoute = ({
  children,
  authorizedRoles = [],
}: SecureRouteProps) => {
  if (!LOGGED_USER_ROLE) {
    return <Navigate to="/" replace />;
  }

  if (!authorizedRoles.includes(LOGGED_USER_ROLE)) {
    return <Navigate to="/notFound" />;
  }

  return children;
};
