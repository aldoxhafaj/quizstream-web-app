import { Column } from '@quizstream/components/layouts/column';

import type { MainWrapperProps } from './types';

export const MainWrapper = ({
  children,
  alignItems = 'start',
  justifyContent = 'start',
}: MainWrapperProps) => {
  return (
    <Column
      classname="w-dvw min-h-dvh bg-background p-3xl max-md:p-xl"
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Column>
  );
};
