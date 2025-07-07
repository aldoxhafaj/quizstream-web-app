import { getInitials } from '@quizstream/utils/helpers';

import type { UseInitialsColorProps } from './types';

export const useInitialsColor = ({
  name = '',
  skipInitialsExtraction = false,
}: UseInitialsColorProps) => {
  const defaultColors = [
    'bg-orange-400',
    'bg-yellow-400',
    'bg-blue-400',
    'bg-red-400',
    'bg-gray-400',
  ];

  const getBackgroundColor = (initials: string) => {
    if (!initials) {
      return defaultColors[0];
    }
    const sumOfLetters = initials.charCodeAt(0) + initials.charCodeAt(1);
    const colorIndex = sumOfLetters % defaultColors.length;
    return defaultColors[colorIndex];
  };

  const initials = !skipInitialsExtraction ? getInitials(name) : '';

  return {
    initials,
    color: getBackgroundColor(initials),
  };
};
