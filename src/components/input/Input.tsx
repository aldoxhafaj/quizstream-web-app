// eslint-disable-next-line no-restricted-imports
import { Input as HeroUIInput } from '@heroui/input';

import type { InputProps } from './types';

export const Input = ({
  classNames,
  variant = 'flat',
  color = 'default',
  size = 'md',
  radius,
  label,
  value,
  defaultValue,
  placeholder,
  description,
  errorMessage,
  minLength,
  maxLength,
  type = 'text',
  startContent,
  endContent,
  labelPlacement = 'inside',
  isClearable = false,
  isRequired = false,
  isReadOnly = false,
  isDisabled = false,
  isInvalid = false,
  fullWidth = false,
  onClear,
  onChange,
  onValueChange,
}: InputProps) => {
  return (
    <HeroUIInput
      classNames={classNames}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      label={label}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      description={description}
      errorMessage={errorMessage}
      minLength={minLength}
      maxLength={maxLength}
      type={type}
      startContent={startContent}
      endContent={endContent}
      labelPlacement={labelPlacement}
      isClearable={isClearable}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      fullWidth={fullWidth}
      onClear={onClear}
      onChange={onChange}
      onValueChange={onValueChange}
    />
  );
};
