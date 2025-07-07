import { Avatar } from '@quizstream/components/avatar';
import { CardView, Row, Text } from '@quizstream/components/layouts';

import type { ProfileWidgetProps } from './types';

export const ProfileWidget = ({
  className,
  title,
  subtitle,
  name = '',
  image = '',
  rightContent,
  avatarSize = 'xs',
  avatarRadius = 'sm',
}: ProfileWidgetProps) => {
  return (
    <CardView className={`w-full ${className}`}>
      <Row alignItems="center" justifyContent="between">
        <Avatar
          image={image}
          name={name}
          size={avatarSize}
          radius={avatarRadius}
        />

        {rightContent}
      </Row>

      {!!subtitle && (
        <Text className="mt-3 text-cloud" size="body">
          {subtitle}
        </Text>
      )}

      {!!title && (
        <Text className="mt-3" size="h5">
          {title}
        </Text>
      )}
    </CardView>
  );
};
