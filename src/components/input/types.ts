// eslint-disable-next-line no-restricted-imports
import { type InputProps as HeroUIInputProps } from '@heroui/input';

export type InputProps = Pick<
  HeroUIInputProps,
  | 'classNames'
  | 'variant'
  | 'color'
  | 'size'
  | 'radius'
  | 'label'
  | 'value'
  | 'defaultValue'
  | 'placeholder'
  | 'description'
  | 'errorMessage'
  | 'minLength'
  | 'maxLength'
  | 'type'
  | 'startContent'
  | 'endContent'
  | 'labelPlacement'
  | 'isClearable'
  | 'isRequired'
  | 'isReadOnly'
  | 'isDisabled'
  | 'isInvalid'
  | 'fullWidth'
  | 'onValueChange'
  | 'onChange'
  | 'onClear'
>;
