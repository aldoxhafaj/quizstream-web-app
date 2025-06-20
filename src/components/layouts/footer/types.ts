import type { AlignItems } from '@quizstream/components/layouts/types';
import type { MouseEventHandler, ReactNode } from 'react';

export type FooterProps = {
  children: ReactNode;
  className?: string;
  alignitems?: AlignItems;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
