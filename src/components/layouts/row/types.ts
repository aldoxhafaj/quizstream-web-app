import type {
  AlignItems,
  JustifyContent,
} from '@quizstream/components/layouts/types';
import type { MouseEventHandler, ReactNode } from 'react';

export type RowProps = {
  children: ReactNode;
  classname?: string;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  flexWrap?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
