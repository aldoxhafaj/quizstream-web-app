import { Column } from '@quizstream/components/layouts/column';
import { Row } from '@quizstream/components/layouts/row';
import { AdminSidebar } from '@quizstream/components/sidebar';
import { UserRole } from '@quizstream/types/user';
import { LOGGED_USER_ROLE } from '@quizstream/utils/constants';

import type { MainWrapperProps } from './types';

const getSidebar = () => {
  switch (LOGGED_USER_ROLE) {
    case UserRole.ADMIN:
      return <AdminSidebar />;
    default:
      return null;
  }
};

export const MainWrapper = ({
  className,
  children,
  alignItems = 'start',
  justifyContent = 'start',
  hasSidebar = false,
}: MainWrapperProps) => {
  return (
    <Column
      className={`no-scrollbar h-dvh w-dvw overflow-y-scroll bg-background ${className}`}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {hasSidebar ? (
        <Row className="h-full w-full gap-6">
          {getSidebar()}
          {children}
        </Row>
      ) : (
        children
      )}
    </Column>
  );
};
