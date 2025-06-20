// eslint-disable-next-line no-restricted-imports
import { type CheckboxProps as HeroUICheckboxProps } from '@heroui/checkbox';

export type CheckboxProps = Pick<
  HeroUICheckboxProps,
  | 'children'
  | 'classNames'
  | 'icon'
  | 'value'
  | 'size'
  | 'color'
  | 'radius'
  | 'lineThrough'
  | 'isSelected'
  | 'defaultSelected'
  | 'isRequired'
  | 'isReadOnly'
  | 'isDisabled'
  | 'isIndeterminate'
  | 'isInvalid'
  | 'onBlur'
  | 'onValueChange'
>;
