import { Button } from '@quizstream/components/button';
import { Column, MainWrapper, Text } from '@quizstream/components/layouts';
import { LottieView } from '@quizstream/components/lottieView';

import type { FallbackViewWrapperProps } from './types';

export const FallbackViewWrapper = ({
  animation,
  animationHeight,
  animationWidth,
  title,
  subtitle,
  buttonProps,
}: FallbackViewWrapperProps) => {
  return (
    <MainWrapper alignItems="center" justifyContent="center">
      <LottieView
        name={animation}
        width={animationWidth}
        height={animationHeight}
        loop
      />

      <Column className="mb-15 gap-4" alignItems="center">
        {!!title && (
          <Text className="text-center" size="h4">
            {title}
          </Text>
        )}

        {!!subtitle && (
          <Text className="text-center text-steel!" size="h6">
            {subtitle}
          </Text>
        )}
      </Column>

      <Button
        className="px-40 max-md:px-30 max-sm:px-24"
        color="primary"
        onPress={buttonProps.onPress}
      >
        <Text className="text-white" size="large">
          {buttonProps.title}
        </Text>
      </Button>
    </MainWrapper>
  );
};
