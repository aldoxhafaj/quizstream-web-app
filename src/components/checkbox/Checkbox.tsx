// eslint-disable-next-line no-restricted-imports
import { Checkbox as HeroUICheckbox } from '@heroui/checkbox';

import type { CheckboxProps } from './types';

export const Checkbox = ({
  children,
  classNames,
  icon,
  value,
  name,
  size = 'md',
  color = 'primary',
  radius,
  lineThrough = false,
  isSelected,
  defaultSelected = false,
  isRequired = false,
  isReadOnly = false,
  isDisabled = false,
  isIndeterminate = false,
  isInvalid = false,
  onValueChange,
}: CheckboxProps) => {
  return (
    <HeroUICheckbox
      classNames={classNames}
      icon={icon}
      value={value}
      name={name}
      size={size}
      color={color}
      radius={radius}
      lineThrough={lineThrough}
      isSelected={isSelected}
      defaultSelected={defaultSelected}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isIndeterminate={isIndeterminate}
      isInvalid={isInvalid}
      onValueChange={onValueChange}
    >
      {children}
    </HeroUICheckbox>
  );
};
