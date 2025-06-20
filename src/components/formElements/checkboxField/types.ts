import type { CheckboxProps } from '@quizstream/components/checkbox/types';

export type CheckboxFieldProps = {
  name: string;
} & Omit<
  CheckboxProps,
  | 'isSelected'
  | 'value'
  | 'defaultSelected'
  | 'isInvalid'
  | 'isReadOnly'
  | 'isDisabled'
  | 'isIndeterminate'
  | 'onBlur'
  | 'onValueChange'
>;
