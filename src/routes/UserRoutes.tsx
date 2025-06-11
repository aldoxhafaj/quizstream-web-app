import { SecureRoute } from '@quizstream/components/secureRoute';
import { NotFound } from '@quizstream/pages/common';
import { Dashboard } from '@quizstream/pages/user';
import { UserRole } from '@quizstream/types/user';
import { Route, Routes } from 'react-router';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <SecureRoute authorizedRoles={[UserRole.USER]}>
            <Dashboard />
          </SecureRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
