import { Button } from '@quizstream/components/button';
import { IconSvg } from '@quizstream/components/iconSvg';

import type { IconButtonProps } from './types';

export const IconButton = ({
  className,
  icon,
  iconClassName,
  size = 'sm',
  color = 'default',
  radius = 'sm',
  onClick,
}: IconButtonProps) => {
  return (
    <Button
      className={className}
      size={size}
      radius={radius}
      color={color}
      isIconOnly
      onClick={onClick}
    >
      <IconSvg className={`fill-base ${iconClassName}`} name={icon} />
    </Button>
  );
};
