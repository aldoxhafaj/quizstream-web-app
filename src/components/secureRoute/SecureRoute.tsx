import { LOGGED_USER_ROLE } from '@quizstream/utils/constants';
import { Navigate } from 'react-router';

import type { SecureRouteProps } from './types';

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
