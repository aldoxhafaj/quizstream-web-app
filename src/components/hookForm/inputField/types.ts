import type { InputProps } from '@quizstream/components/input/types';

export type InputFieldProps = { name: string } & Omit<
  InputProps,
  | 'ref'
  | 'name'
  | 'value'
  | 'errorMessage'
  | 'isInvalid'
  | 'isReadOnly'
  | 'onBlur'
  | 'onChange'
  | 'onValueChange'
>;
