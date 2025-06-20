import type { ReactNode } from 'react';
import type {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

type ButtonProps<T> = {
  title: string;
  onSubmit: SubmitHandler<T>;
};

export type FormWrapperProps<T extends FieldValues> = {
  children: ReactNode;
  form: UseFormReturn<T>;
  buttonProps: ButtonProps<T>;
};
