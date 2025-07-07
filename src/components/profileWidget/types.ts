import type {
  AvatarProps,
  AvatarRadius,
  AvatarSize,
} from '@quizstream/components/avatar/types';
import type { ReactNode } from 'react';

export type ProfileWidgetProps = {
  className?: string;
  title?: string;
  subtitle?: string;
  rightContent?: ReactNode;
  avatarRadius?: keyof typeof AvatarRadius;
  avatarSize?: AvatarSize;
} & Pick<AvatarProps, 'image' | 'name'>;
