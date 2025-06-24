import type { CheckboxProps } from '@quizstream/components/checkbox/types';

export type CheckboxFieldProps = {
  name: string;
} & Omit<
  CheckboxProps,
  | 'isSelected'
  | 'isInvalid'
  | 'isReadOnly'
  | 'isIndeterminate'
  | 'onBlur'
  | 'onValueChange'
>;
