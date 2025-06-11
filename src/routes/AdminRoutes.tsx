import { SecureRoute } from '@quizstream/components/secureRoute';
import { Dashboard } from '@quizstream/pages/admin';
import { NotFound } from '@quizstream/pages/common';
import { UserRole } from '@quizstream/types/user';
import { Route, Routes } from 'react-router';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <SecureRoute authorizedRoles={[UserRole.ADMIN]}>
            <Dashboard />
          </SecureRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
