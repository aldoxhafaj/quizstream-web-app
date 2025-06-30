import { Button } from '@quizstream/components/button';
import { IconSvg } from '@quizstream/components/iconSvg';
import { IconNameSVG } from '@quizstream/themes/svgIcons';

import type { SlideControlProps } from './types';

export const SlideControl = ({
  position = 'left',
  onClick,
}: SlideControlProps) => {
  const isLeftPosition = position === 'left';

  return (
    <Button
      className={`absolute ${isLeftPosition ? 'left-0' : 'right-0'} top-1/2 z-10 -translate-y-1/2 bg-cloud`}
      radius="full"
      isIconOnly
      onClick={onClick}
    >
      <IconSvg
        className="fill-white"
        name={
          isLeftPosition ? IconNameSVG.CHEVRON_LEFT : IconNameSVG.CHEVRON_RIGHT
        }
      />
    </Button>
  );
};
