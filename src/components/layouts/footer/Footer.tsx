import { FlexAlign } from '@quizstream/components/layouts/types';

import type { FooterProps } from './types';

export const Footer = ({
  children,
  classname,
  alignitems = 'center',
  onClick,
}: FooterProps) => {
  const isClickable = !!onClick;
  return (
    <div
      className={`flex grow justify-end ${FlexAlign[alignitems]} ${isClickable && 'cursor-pointer'} ${classname}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
