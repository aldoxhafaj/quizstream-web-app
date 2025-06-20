import type { Animation } from '@quizstream/themes/animations';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export type FallbackViewWrapperProps = {
  animation: Animation;
  animationWidth?: number;
  animationHeight?: number;
  title: string;
  subtitle: string;
  buttonProps: ButtonProps;
};
