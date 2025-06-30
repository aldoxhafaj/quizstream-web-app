import { Column, Container, Text } from '@quizstream/components/layouts';
import { LottieView } from '@quizstream/components/lottieView';
import { CAROUSEL_SLIDE_AUTOPLAY_DURATION } from '@quizstream/utils/constants';

import { SlideControl } from './SlideControl';
import { SlideIndicators } from './SlideIndicators';
import type { CarouselProps } from './types';
import { useCarousel } from './useCarousel';

export const Carousel = ({
  slides = [],
  duration = CAROUSEL_SLIDE_AUTOPLAY_DURATION,
  autoplay = true,
  loop = false,
  onSlideClick,
}: CarouselProps) => {
  const {
    slidePage,
    isCarouselInteractive,
    onNextSlide,
    onPreviousSlide,
    onSlideIndicatorClick,
  } = useCarousel({
    slides,
    duration,
    autoplay,
    loop,
  });

  return (
    <Container className="relative size-full" overflow="hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${slidePage * 100}%)` }}
      >
        {slides.map(({ id, title, description, animation }, index) => (
          <Column
            key={id}
            className="mb-4 w-full shrink-0"
            alignItems="center"
            onClick={onSlideClick}
          >
            {!!title && (
              <Text className="text-center" size="h6">
                {title}
              </Text>
            )}

            {!!description && (
              <Text className="py-2 text-center" size="body">
                {description}
              </Text>
            )}

            {!!animation && (
              <LottieView
                name={animation.name}
                height={animation.height ?? animation.size}
                width={animation.width ?? animation.size}
                enableAnimation={index === slidePage}
              />
            )}
          </Column>
        ))}
      </div>

      {isCarouselInteractive && (
        <>
          <SlideControl onClick={onPreviousSlide} />
          <SlideControl position="right" onClick={onNextSlide} />
        </>
      )}

      <SlideIndicators
        page={slidePage}
        totalPages={slides.length}
        disabled={!isCarouselInteractive}
        onClick={onSlideIndicatorClick}
      />
    </Container>
  );
};
