import type { TextProps, TextSize } from './types';

const Fontsize: Record<TextSize, string> = {
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  h4: 'text-h4',
  h5: 'text-h5',
  h6: 'text-h6',
  large: 'text-large',
  body: 'text-body',
  caption: 'text-caption',
  small: 'text-small',
};
export const Text = ({
  children,
  classname,
  size = 'large',
  onClick,
}: TextProps) => {
  const isClickable = !!onClick;
  return (
    <p
      className={`${Fontsize[size]} ${isClickable && 'cursor-pointer'} ${classname}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
};
