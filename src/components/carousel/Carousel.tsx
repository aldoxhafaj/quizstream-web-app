import { Column, Row } from '@quizstream/components/layouts';

import { SlideControl } from './SlideControl';
import { SlideIndicators } from './SlideIndicators';
import type { CarouselProps } from './types';
import { useCarousel } from './useCarousel';

export const Carousel = ({
  slides,
  duration,
  autoplay = true,
  loop = false,
  onSlidePress,
}: CarouselProps) => {
  const {
    slidePage,
    isCarouselInteractive,
    onNextSlide,
    onPreviousSlide,
    onSlideIndicatorPress,
  } = useCarousel({
    slides,
    duration,
    autoplay,
    loop,
  });

  return (
    <Column className="relative size-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${slidePage * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Row
            key={`${slide.title}-${index}`}
            className="flex w-full shrink-0"
            onClick={onSlidePress}
          >
            {null}
          </Row>
        ))}
      </div>

      {isCarouselInteractive && (
        <>
          <SlideControl onPress={onPreviousSlide} />
          <SlideControl position="right" onPress={onNextSlide} />
        </>
      )}

      <SlideIndicators
        page={slidePage}
        totalPages={slides.length}
        onPress={onSlideIndicatorPress}
      />
    </Column>
  );
};
