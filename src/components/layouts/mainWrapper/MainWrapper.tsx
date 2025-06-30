import { Column } from '@quizstream/components/layouts/column';

import type { MainWrapperProps } from './types';

export const MainWrapper = ({
  children,
  alignItems = 'start',
  justifyContent = 'start',
}: MainWrapperProps) => {
  return (
    <Column
      className="min-h-dvh w-dvw bg-background"
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Column>
  );
};
