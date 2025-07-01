import { IconButton } from '@quizstream/components/iconButton';
import { IconNameSVG } from '@quizstream/themes/svgIcons';

import type { SlideControlProps } from './types';

export const SlideControl = ({
  position = 'left',
  onClick,
}: SlideControlProps) => {
  const isLeftPosition = position === 'left';
  const icon = isLeftPosition
    ? IconNameSVG.CHEVRON_LEFT
    : IconNameSVG.CHEVRON_RIGHT;

  return (
    <IconButton
      className={`absolute ${isLeftPosition ? 'left-0' : 'right-0'} top-1/2 z-10 -translate-y-1/2 bg-cloud`}
      size="md"
      radius="full"
      icon={icon}
      iconClassName="fill-white!"
      onClick={onClick}
    />
  );
};
