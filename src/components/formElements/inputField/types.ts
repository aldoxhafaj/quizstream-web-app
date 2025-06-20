import type { InputProps } from '@quizstream/components/input/types';

export type InputFieldProps = { name: string } & Omit<
  InputProps,
  | 'name'
  | 'value'
  | 'defaultValue'
  | 'errorMessage'
  | 'isInvalid'
  | 'isDisabled'
  | 'isReadOnly'
  | 'onBlur'
  | 'onChange'
  | 'onValueChange'
>;
