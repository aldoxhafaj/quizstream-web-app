import { FlexAlign, FlexJustify } from '@quizstream/components/layouts/types';

import type { RowProps } from './types';

export const Row = ({
  children,
  className,
  alignItems = 'stretch',
  justifyContent = 'start',
  flexWrap = false,
  onClick,
}: RowProps) => {
  const isClickable = !!onClick;
  return (
    <div
      className={`flex flex-row ${FlexAlign[alignItems]} ${FlexJustify[justifyContent]} ${flexWrap && 'flex-wrap'} ${isClickable && 'cursor-pointer'} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
