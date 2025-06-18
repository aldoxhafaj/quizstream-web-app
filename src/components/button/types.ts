// eslint-disable-next-line no-restricted-imports
import { type ButtonProps as HeroUIButtonProps } from '@heroui/button';

export type ButtonProps = Pick<
  HeroUIButtonProps,
  | 'children'
  | 'className'
  | 'variant'
  | 'size'
  | 'color'
  | 'radius'
  | 'startContent'
  | 'endContent'
  | 'spinner'
  | 'spinnerPlacement'
  | 'isIconOnly'
  | 'isDisabled'
  | 'isLoading'
  | 'disableRipple'
  | 'fullWidth'
  | 'onPress'
>;
