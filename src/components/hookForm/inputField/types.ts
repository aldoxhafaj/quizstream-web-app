import type { InputProps } from '@quizstream/components/input/types';

export type InputFieldProps = { name: string } & Omit<
  InputProps,
  | 'ref'
  | 'name'
  | 'value'
  | 'defaultValue'
  | 'errorMessage'
  | 'isInvalid'
  | 'isReadOnly'
  | 'onBlur'
  | 'onChange'
  | 'onValueChange'
>;
