import { Row } from '@quizstream/components/layouts';

import type { SlideIndicatorsProps } from './types';

export const SlideIndicators = ({
  page,
  totalPages,
  onPress,
}: SlideIndicatorsProps) => {
  return (
    <Row className="absolute bottom-0 left-1/2 -translate-x-1/2 space-x-2">
      {Array.from({ length: totalPages }).map((_, slideIndex) => {
        const indicatorStyle =
          page === slideIndex
            ? 'scale-x-110 bg-contrast'
            : 'bg-gray-400 opacity-65';

        return (
          <div
            key={slideIndex}
            className={`h-1 min-w-10 cursor-pointer select-none ${indicatorStyle} rounded-sm transition-all duration-300`}
            onClick={() => onPress(slideIndex)}
          />
        );
      })}
    </Row>
  );
};
