import { Input } from '@quizstream/components/input';
import { useController, useFormContext } from 'react-hook-form';

import type { InputFieldProps } from './types';

/** This field is only available through formWrapper.
 *  Otherwise use input.
 */

export const InputField = ({
  classNames,
  name,
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
  isClearable = false,
  isRequired = false,
  fullWidth = false,
  onClear,
}: InputFieldProps) => {
  const { control } = useFormContext();
  const {
    field: { onBlur, onChange, value },
    formState: { errors, isValid },
  } = useController({ name, control });

  return (
    <Input
      value={value}
      errorMessage={errors.root?.message}
      isInvalid={!isValid}
      onBlur={onBlur}
      onChange={onChange}
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
      fullWidth={fullWidth}
      onClear={onClear}
    />
  );
};
