import { Container } from '@quizstream/components/layouts/container';

import type { CardViewProps } from './types';

export const CardView = ({
  children,
  className,
  disableScrollbar = false,
  overflow = 'hidden',
  onClick,
}: CardViewProps) => {
  const isClickable = !!onClick;
  return (
    <Container
      className={`rounded-md bg-glow p-4 shadow-x3 select-none ${isClickable && 'hover:opacity-90 active:opacity-85'} ${className}`}
      disableScrollbar={disableScrollbar}
      overflow={overflow}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};
