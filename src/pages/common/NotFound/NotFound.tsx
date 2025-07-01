import { FallbackViewWrapper } from '@quizstream/components/layouts';
import { useIntl } from '@quizstream/contexts/i18nContext';
import { Animation } from '@quizstream/themes/animations';
import { UserRole } from '@quizstream/types/user';
import { horizontalScale } from '@quizstream/utils/calculations';
import { LOGGED_USER_ROLE } from '@quizstream/utils/constants';
import { useNavigate } from 'react-router';

const ANIMATION_SIZE = horizontalScale(450);
export const NotFound = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  const onBackClick = () => {
    switch (LOGGED_USER_ROLE) {
      case UserRole.ADMIN:
        return navigate('/admin/dashboard');
      default:
        return navigate('/dashboard');
    }
  };

  return (
    <FallbackViewWrapper
      animation={Animation.SOMETHING_WENT_WRONG}
      animationWidth={ANIMATION_SIZE}
      animationHeight={ANIMATION_SIZE}
      title={formatMessage({
        id: 'notFound.title',
        defaultMessage: 'Whoops! Page not found.',
      })}
      subtitle={formatMessage({
        id: 'notFound.subtitle',
        defaultMessage:
          "We couldn't find the page you are looking for.It might have been moved or doesn't exist anymore.",
      })}
      buttonProps={{
        title: formatMessage({
          id: 'notFound.button.label',
          defaultMessage: 'Back to home',
        }),
        onClick: onBackClick,
      }}
    />
  );
};
