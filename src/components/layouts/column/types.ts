import type {
  AlignItems,
  JustifyContent,
} from '@quizstream/components/layouts/types';
import type { MouseEventHandler, ReactNode } from 'react';

export type ColumnProps = {
  children: ReactNode;
  className?: string;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
