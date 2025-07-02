import type { ContainerProps } from '@quizstream/components/layouts/container/types';

export type CardViewProps = Pick<
  ContainerProps,
  'children' | 'className' | 'overflow' | 'disableScrollbar' | 'onClick'
>;
