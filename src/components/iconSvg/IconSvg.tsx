import { SvgIcons } from '@quizstream/themes/svgIcons';

import type { IconSvgProps } from './types';

export const IconSvg = ({ name, className }: IconSvgProps) => {
  const Icon = SvgIcons[name];

  return <Icon className={`h-6 w-6 fill-base ${className}`} />;
};
