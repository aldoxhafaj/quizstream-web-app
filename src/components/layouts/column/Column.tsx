import { FlexAlign, FlexJustify } from '@quizstream/components/layouts/types';

import type { ColumnProps } from './types';

export const Column = ({
  children,
  classname,
  alignItems = 'start',
  justifyContent = 'start',
  onClick,
}: ColumnProps) => {
  const isClickable = !!onClick;
  return (
    <div
      className={`flex flex-col ${FlexAlign[alignItems]} ${FlexJustify[justifyContent]} ${isClickable && 'cursor-pointer'} ${classname}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
