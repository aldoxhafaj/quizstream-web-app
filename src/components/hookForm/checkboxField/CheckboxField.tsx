import { Checkbox } from '@quizstream/components/checkbox';
import { Container, Row, Text } from '@quizstream/components/layouts';
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
  rightContent,
  defaultSelected = false,
  isDisabled = false,
  lineThrough = false,
  isRequired = false,
}: CheckboxFieldProps) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ name, control });

  const errorMessage = fieldState?.error?.message;
  return (
    <Container>
      <Row className="gap-1" alignItems="center">
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
        {rightContent}
      </Row>

      {!!errorMessage && (
        <Text className="mt-1 text-danger" size="caption">
          {errorMessage}
        </Text>
      )}
    </Container>
  );
};
