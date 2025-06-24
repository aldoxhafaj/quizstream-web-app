import { Input } from '@quizstream/components/input';
import { useController, useFormContext } from 'react-hook-form';

import type { InputFieldProps } from './types';

export const InputField = ({
  name,
  classNames,
  variant = 'flat',
  color = 'default',
  size = 'md',
  radius,
  label,
  placeholder,
  description,
  minLength,
  maxLength,
  type = 'text',
  startContent,
  endContent,
  labelPlacement = 'inside',
  defaultValue,
  isClearable = false,
  isRequired = false,
  isDisabled = false,
  fullWidth = false,
  onClear,
}: InputFieldProps) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ name, control });

  return (
    <Input
      ref={field.ref}
      value={field.value}
      defaultValue={defaultValue}
      errorMessage={fieldState?.error?.message}
      isInvalid={fieldState?.invalid}
      classNames={classNames}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      label={label}
      placeholder={placeholder}
      description={description}
      minLength={minLength}
      maxLength={maxLength}
      type={type}
      startContent={startContent}
      endContent={endContent}
      labelPlacement={labelPlacement}
      isClearable={isClearable}
      isRequired={isRequired}
      isDisabled={isDisabled}
      fullWidth={fullWidth}
      onBlur={field.onBlur}
      onChange={field.onChange}
      onClear={onClear}
    />
  );
};
