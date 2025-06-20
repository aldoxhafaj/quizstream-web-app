import type { MouseEventHandler, ReactNode } from 'react';

export enum Fontsize {
  h1 = 'text-h1',
  h2 = 'text-h2',
  h3 = 'text-h3',
  h4 = 'text-h4',
  h5 = 'text-h5',
  h6 = 'text-h6',
  large = 'text-large',
  body = 'text-body',
  caption = 'text-caption',
  small = 'text-small',
}

export type TextSize = keyof typeof Fontsize;

export type TextProps = {
  children: ReactNode;
  className?: string;
  size?: TextSize;
  onClick?: MouseEventHandler<HTMLParagraphElement>;
};
