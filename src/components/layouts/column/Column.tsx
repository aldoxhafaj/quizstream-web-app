import { FlexAlign, FlexJustify } from '@quizstream/components/layouts/types';

import type { ColumnProps } from './types';

export const Column = ({
  children,
  className,
  alignItems = 'start',
  justifyContent = 'start',
  onClick,
}: ColumnProps) => {
  const isClickable = !!onClick;
  return (
    <div
      className={`flex flex-col ${FlexAlign[alignItems]} ${FlexJustify[justifyContent]} ${isClickable && 'cursor-pointer'} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
