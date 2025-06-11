import { Login } from '@quizstream/pages/common';
import { Route, Routes } from 'react-router';

import { AdminRoutes, UserRoutes } from './routes';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/*" element={<UserRoutes />} />
    </Routes>
  );
};
