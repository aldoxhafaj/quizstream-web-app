import { FlexAlign } from '@quizstream/components/layouts/types';

import type { FooterProps } from './types';

export const Footer = ({
  children,
  className,
  alignitems = 'center',
  onClick,
}: FooterProps) => {
  const isClickable = !!onClick;
  return (
    <div
      className={`flex grow justify-center ${FlexAlign[alignitems]} ${isClickable && 'cursor-pointer'} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
