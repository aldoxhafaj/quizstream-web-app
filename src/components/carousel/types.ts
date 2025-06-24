import type { Animation } from '@quizstream/themes/animations';

export type Slide = {
  title?: string;
  description?: string;
  animation?: Animation;
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
  onPress: (slideIndex: number) => void;
};
