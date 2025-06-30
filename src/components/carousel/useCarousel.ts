import { useEffect, useState } from 'react';

import type { UseCarouselProps } from './types';

export const useCarousel = ({
  slides = [],
  duration,
  autoplay = true,
  loop = false,
}: UseCarouselProps) => {
  const [slidePage, setSlidePage] = useState(0);

  const onNextSlide = () => {
    if (loop) {
      return setSlidePage((prevPage) => (prevPage + 1) % slides.length);
    }

    setSlidePage((prevPage) => Math.min(prevPage + 1, slides.length - 1));
  };

  const onPreviousSlide = () => {
    setSlidePage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const onSlideIndicatorClick = (slideIndex: number) => {
    setSlidePage(slideIndex);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(onNextSlide, duration);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, duration]);

  return {
    slidePage,
    isCarouselInteractive: !autoplay && !loop,
    onNextSlide,
    onPreviousSlide,
    onSlideIndicatorClick,
  };
};
