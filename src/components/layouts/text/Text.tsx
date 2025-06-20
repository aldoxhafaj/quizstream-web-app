import { Fontsize, type TextProps } from './types';

export const Text = ({
  children,
  className,
  size = 'large',
  onClick,
}: TextProps) => {
  const isClickable = !!onClick;
  return (
    <p
      className={`font-urbanist ${Fontsize[size]} text-base ${isClickable && 'cursor-pointer transition-all select-none hover:opacity-90 active:opacity-75'} ${className}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
};
