import { FlexAlign, FlexJustify } from '@quizstream/components/layouts/types';

import type { RowProps } from './types';

export const Row = ({
  children,
  classname,
  alignItems = 'start',
  justifyContent = 'start',
  flexWrap = false,
  onClick,
}: RowProps) => {
  const isClickable = !!onClick;
  return (
    <div
      className={`flex flex-row ${FlexAlign[alignItems]} ${FlexJustify[justifyContent]} ${flexWrap && 'flex-wrap'} ${isClickable && 'cursor-pointer'} ${classname}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
