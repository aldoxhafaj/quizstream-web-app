import { IconSvg } from '@quizstream/components/iconSvg';
import { Image, Row, Text } from '@quizstream/components/layouts';
import { IconNameSVG } from '@quizstream/themes/svgIcons';

import {
  type AvatarDimensions,
  type AvatarProps,
  AvatarRadius,
  type AvatarSize,
} from './types';
import { useInitialsColor } from './useInitialsColor';

const avatarConfig: Record<AvatarSize, AvatarDimensions> = {
  xs: {
    size: 'size-8!',
    text: 'caption',
  },
  sm: {
    size: 'size-10!',
    text: 'body',
  },
  md: {
    size: 'size-13!',
    text: 'large',
  },
  lg: {
    size: 'size-16!',
    text: 'h6',
  },
};

export const Avatar = ({
  name = '',
  image,
  size = 'xs',
  radius = 'sm',
}: AvatarProps) => {
  const { size: avatarSize, text } = avatarConfig[size];
  const { initials, color } = useInitialsColor({
    name,
    skipInitialsExtraction: !!image || !name,
  });

  switch (true) {
    case !!image:
      return <Image className={avatarSize} source={image} radius={radius} />;
    case !!name:
      return (
        <Row
          className={`${avatarSize} ${color} ${AvatarRadius[radius]} overflow-hidden`}
          alignItems="center"
          justifyContent="center"
        >
          <Text className="text-white" size={text}>
            {initials}
          </Text>
        </Row>
      );
    default:
      return (
        <IconSvg
          className={`${avatarSize} ${AvatarRadius[radius]}`}
          name={IconNameSVG.NO_AVATAR}
        />
      );
  }
};
