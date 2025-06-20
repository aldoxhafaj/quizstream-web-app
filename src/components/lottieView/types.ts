import type { Animation } from '@quizstream/themes/animations';

export type LottieViewProps = {
  name: Animation;
  width?: number;
  height?: number;
  containerClassname?: string;
  autoplay?: boolean;
  loop?: boolean;
  enableLoading?: boolean;
};
