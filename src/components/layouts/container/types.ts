import type { MouseEventHandler, ReactNode } from 'react';

export enum OverflowBehaviour {
  auto = 'overflow-auto',
  hidden = 'overflow-hidden',
  visible = 'overflow-visible',
  horizontalscroll = 'overflow-x-scroll',
  verticalscroll = 'overflow-y-scroll',
  horizontalAutoScroll = 'overflow-x-auto',
  verticalAutoScroll = 'overflow-y-auto',
}

type Overflow = keyof typeof OverflowBehaviour;

export type ContainerProps = {
  children: ReactNode;
  classname?: string;
  overflow?: Overflow;
  disableScrollbar?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
