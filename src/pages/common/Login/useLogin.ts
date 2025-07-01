import type { LoginFormValues } from '@quizstream/components/forms/login/types';
import { UserRole } from '@quizstream/types/user';
import { LOGGED_USER_ROLE } from '@quizstream/utils/constants';
import { useNavigate } from 'react-router';

export const useLogin = () => {
  const navigate = useNavigate();

  const onSignupClick = () => {
    //TODO
  };

  const onTermsClick = () => {
    //TODO
  };

  const onLoginSubmit = (_data: LoginFormValues) => {
    //TODO
    switch (LOGGED_USER_ROLE) {
      case UserRole.ADMIN:
        return navigate('/admin/dashboard');
      default:
        return navigate('/dashboard');
    }
  };

  return { onSignupClick, onTermsClick, onLoginSubmit };
};
