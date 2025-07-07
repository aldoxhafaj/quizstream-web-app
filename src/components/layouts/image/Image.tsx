import { type ImageProps, ImageRadius, ResizeMode } from './types';

export const Image = ({
  className,
  source,
  radius = 'none',
  resizeMode = 'cover',
}: ImageProps) => {
  return (
    <img
      className={`${ResizeMode[resizeMode]} ${ImageRadius[radius]} overflow-hidden ${className}`}
      src={source}
    />
  );
};
