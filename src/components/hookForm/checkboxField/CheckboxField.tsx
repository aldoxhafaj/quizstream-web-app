import { Checkbox } from '@quizstream/components/checkbox';
import { useController, useFormContext } from 'react-hook-form';

import type { CheckboxFieldProps } from './types';

export const CheckboxField = ({
  children,
  name,
  classNames,
  icon,
  size = 'md',
  color = 'primary',
  radius,
  value,
  defaultSelected = false,
  isDisabled = false,
  lineThrough = false,
  isRequired = false,
}: CheckboxFieldProps) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ name, control });

  return (
    <Checkbox
      classNames={classNames}
      icon={icon}
      size={size}
      color={color}
      radius={radius}
      value={value}
      isSelected={field.value}
      isInvalid={fieldState.invalid}
      defaultSelected={defaultSelected}
      isDisabled={isDisabled}
      lineThrough={lineThrough}
      isRequired={isRequired}
      onBlur={field.onBlur}
      onValueChange={field.onChange}
    >
      {children}
    </Checkbox>
  );
};
