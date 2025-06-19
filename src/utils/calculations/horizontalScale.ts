import { WIDTH_RATIO } from '@quizstream/utils/constants';

export const horizontalScale = (size: number) => {
  const scaledSize = WIDTH_RATIO * size;
  return Number(scaledSize.toFixed(2));
};
