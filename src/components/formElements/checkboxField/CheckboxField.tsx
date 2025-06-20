import { Checkbox } from '@quizstream/components/checkbox';
import { useController, useFormContext } from 'react-hook-form';

import type { CheckboxFieldProps } from './types';

/** This field is only available through formWrapper.
 *  Otherwise use checkbox.
 */

export const CheckboxField = ({
  children,
  name,
  classNames,
  icon,
  size = 'md',
  color = 'primary',
  radius,
  lineThrough = false,
  isRequired = false,
}: CheckboxFieldProps) => {
  const { control } = useFormContext();
  const {
    field: { value, onBlur, onChange },
    formState: { isValid },
  } = useController({ name, control });

  return (
    <Checkbox
      isSelected={value}
      isInvalid={!isValid}
      classNames={classNames}
      icon={icon}
      value={value}
      size={size}
      color={color}
      radius={radius}
      lineThrough={lineThrough}
      isRequired={isRequired}
      onBlur={onBlur}
      onValueChange={onChange}
    >
      {children}
    </Checkbox>
  );
};
