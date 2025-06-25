import type { Animation } from '@quizstream/themes/animations';

type SlideAnimation = {
  name: Animation;
  size?: number;
  height?: number;
  width?: number;
};

export type Slide = {
  id: number;
  title?: string;
  description?: string;
  animation?: SlideAnimation;
};

export type CarouselProps = {
  onSlidePress?: () => void;
} & UseCarouselProps;

export type UseCarouselProps = {
  slides: Slide[];
  duration?: number;
  autoplay?: boolean;
  loop?: boolean;
};

export type SlideControlProps = {
  position?: 'left' | 'right';
  onPress: () => void;
};

export type SlideIndicatorsProps = {
  page: number;
  totalPages: number;
  disabled?: boolean;
  onPress: (slideIndex: number) => void;
};
