import type { Animation } from '@quizstream/themes/animations';

export type LottieViewProps = {
  name: Animation;
  width?: number;
  height?: number;
  containerClassName?: string;
  autoplay?: boolean;
  loop?: boolean;
  enableLoading?: boolean;
};
