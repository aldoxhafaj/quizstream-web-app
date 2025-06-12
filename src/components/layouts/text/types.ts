import type { MouseEventHandler, ReactNode } from 'react';

export type TextSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'large'
  | 'body'
  | 'caption'
  | 'small';

export type TextProps = {
  children: ReactNode;
  classname?: string;
  size?: TextSize;
  onClick?: MouseEventHandler<HTMLParagraphElement>;
};
