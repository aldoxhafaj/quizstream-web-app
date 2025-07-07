import type { TextSize } from '@quizstream/components/layouts/text/types';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

export enum AvatarRadius {
  sm = 'rounded-sm!',
  md = 'rounded-md!',
  lg = 'rounded-lg!',
  full = 'rounded-full!',
}

export type AvatarDimensions = {
  size: string;
  text: TextSize;
};

export type AvatarProps = {
  image?: string;
  name?: string;
  size?: AvatarSize;
  radius?: keyof typeof AvatarRadius;
};

export type UseInitialsColorProps = {
  name?: string;
  skipInitialsExtraction?: boolean;
};
