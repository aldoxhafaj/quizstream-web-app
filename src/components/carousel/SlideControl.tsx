import { Button } from '@quizstream/components/button';

import type { SlideControlProps } from './types';

export const SlideControl = ({
  position = 'left',
  onPress,
}: SlideControlProps) => {
  const isLeftPosition = position === 'left';

  return (
    <Button
      className={`absolute ${isLeftPosition ? 'left-0' : 'right-0'} top-1/2 z-10 -translate-y-1/2`}
      radius="full"
      isIconOnly
      onPress={onPress}
    >
      {null}
    </Button>
  );
};
