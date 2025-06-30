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
  onSlideClick?: () => void;
} & UseCarouselProps;

export type UseCarouselProps = {
  slides: Slide[];
  duration?: number;
  autoplay?: boolean;
  loop?: boolean;
};

export type SlideControlProps = {
  position?: 'left' | 'right';
  onClick: () => void;
};

export type SlideIndicatorsProps = {
  page: number;
  totalPages: number;
  disabled?: boolean;
  onClick: (slideIndex: number) => void;
};
