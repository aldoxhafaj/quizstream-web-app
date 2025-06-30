// eslint-disable-next-line no-restricted-imports
import { Button as HeroUIButton } from '@heroui/button';

import type { ButtonProps } from './types';

export const Button = ({
  children,
  className,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  radius,
  startContent,
  endContent,
  spinner,
  spinnerPlacement = 'start',
  isIconOnly = false,
  isDisabled = false,
  isLoading = false,
  disableRipple = false,
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  return (
    <HeroUIButton
      className={className}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      startContent={startContent}
      endContent={endContent}
      spinner={spinner}
      spinnerPlacement={spinnerPlacement}
      isIconOnly={isIconOnly}
      isDisabled={isDisabled}
      isLoading={isLoading}
      disableRipple={disableRipple}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </HeroUIButton>
  );
};
