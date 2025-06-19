import { Button } from '@quizstream/components/button';
import { Column, Text } from '@quizstream/components/layouts';
import { LottieView } from '@quizstream/components/lottieView';
import { useIntl } from '@quizstream/contexts/i18nContext';
import { Animation } from '@quizstream/themes/animations';
import { horizontalScale } from '@quizstream/utils/calculations';
import type { FallbackProps } from 'react-error-boundary';

const LOTTIE_SIZE = horizontalScale(450);
export const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  const { formatMessage } = useIntl();

  return (
    <Column
      classname="w-dvw min-h-dvh bg-background p-3xl max-md:p-xl"
      alignItems="center"
      justifyContent="center"
    >
      <LottieView
        name={Animation.SOMETHING_WENT_WRONG}
        width={LOTTIE_SIZE}
        height={LOTTIE_SIZE}
        loop
      />
      <Column classname="mb-15 gap-4" alignItems="center">
        <Text classname="text-center" size="h4">
          {formatMessage({
            id: 'errorFallback.title',
            defaultMessage: 'Whoops! Something, went wrong!',
          })}
        </Text>
        <Text classname="text-center text-steel!" size="h6">
          {formatMessage({
            id: 'errorFallback.description',
            defaultMessage:
              "We're sorry, but an unexpected error occurred. Our team is working to resolve the issue. Please try refreshing the page or check back later.",
          })}
        </Text>
      </Column>

      <Button
        className="px-40 max-md:px-30 max-sm:px-24"
        color="primary"
        onPress={resetErrorBoundary}
      >
        <Text classname="text-white" size="large">
          {formatMessage({
            id: 'errorFallback.button.label',
            defaultMessage: 'Try again!',
          })}
        </Text>
      </Button>
    </Column>
  );
};
