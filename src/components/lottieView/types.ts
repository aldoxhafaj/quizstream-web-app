import type { Animation } from '@quizstream/themes/animations';

export type LottieViewProps = {
  name: Animation;
  width?: number;
  height?: number;
  autoplay?: boolean;
  loop?: boolean;
  enableAnimation?: boolean;
  enableLoading?: boolean;
};
