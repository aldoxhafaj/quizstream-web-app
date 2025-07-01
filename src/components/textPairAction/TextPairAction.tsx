import { Row, Text } from '@quizstream/components/layouts';

import { TextColorScheme, type TextPairActionProps } from './types';

export const TextPairAction = ({
  className,
  primaryMessage,
  actionLabel,
  primaryMessageSize = 'body',
  actionLabelSize = 'body',
  primaryMessageColor = 'primary',
  actionLabelColor = 'secondary',
  underlinedAction = false,
  onClick,
}: TextPairActionProps) => {
  return (
    <Row className={`gap-1 ${className}`} alignItems="center">
      <Text
        className={`${TextColorScheme[primaryMessageColor]}`}
        size={primaryMessageSize}
      >
        {primaryMessage}
      </Text>

      <Text
        className={`${TextColorScheme[actionLabelColor]} ${underlinedAction && 'underline'}`}
        size={actionLabelSize}
        onClick={onClick}
      >
        {actionLabel}
      </Text>
    </Row>
  );
};
