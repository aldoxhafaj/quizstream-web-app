import { HEIGHT_RATIO } from '@quizstream/utils/constants';

export const verticalScale = (size: number) => {
  const scaledSize = HEIGHT_RATIO * size;
  return Number(scaledSize.toFixed(2));
};
