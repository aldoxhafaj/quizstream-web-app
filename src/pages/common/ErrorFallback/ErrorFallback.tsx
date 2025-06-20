import { FallbackViewWrapper } from '@quizstream/components/layouts';
import { useIntl } from '@quizstream/contexts/i18nContext';
import { Animation } from '@quizstream/themes/animations';
import { horizontalScale } from '@quizstream/utils/calculations';
import type { FallbackProps } from 'react-error-boundary';

const ANIMATION_SIZE = horizontalScale(450);
export const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  const { formatMessage } = useIntl();

  return (
    <FallbackViewWrapper
      animation={Animation.SOMETHING_WENT_WRONG}
      animationWidth={ANIMATION_SIZE}
      animationHeight={ANIMATION_SIZE}
      title={formatMessage({
        id: 'errorFallback.title',
        defaultMessage: 'Whoops! Something, went wrong!',
      })}
      subtitle={formatMessage({
        id: 'errorFallback.subtitle',
        defaultMessage:
          "We're sorry, but an unexpected error occurred. Our team is working to resolve the issue. Please try refreshing the page or check back later.",
      })}
      buttonProps={{
        title: formatMessage({
          id: 'errorFallback.button.label',
          defaultMessage: 'Try again!',
        }),
        onPress: resetErrorBoundary,
      }}
    />
  );
};
