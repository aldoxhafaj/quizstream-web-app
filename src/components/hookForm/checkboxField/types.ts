import type { CheckboxProps } from '@quizstream/components/checkbox/types';
import type { ReactNode } from 'react';

export type CheckboxFieldProps = {
  name: string;
  rightContent?: ReactNode;
} & Omit<
  CheckboxProps,
  | 'isSelected'
  | 'isInvalid'
  | 'isReadOnly'
  | 'isIndeterminate'
  | 'onBlur'
  | 'onValueChange'
>;
