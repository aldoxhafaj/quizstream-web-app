import { type ContainerProps, OverflowBehaviour } from './types';

export const Container = ({
  children,
  className,
  overflow = 'visible',
  disableScrollbar = false,
  onClick,
}: ContainerProps) => {
  const isClickable = !!onClick;
  return (
    <div
      className={`${OverflowBehaviour[overflow]} ${disableScrollbar && 'no-scrollbar'} ${isClickable && 'cursor-pointer'} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
