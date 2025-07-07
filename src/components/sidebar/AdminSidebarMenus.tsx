import { IconSvg } from '@quizstream/components/iconSvg';
import { CardView, Row, Text } from '@quizstream/components/layouts';

import type { AdminSidebarMenusProps } from './types';

export const AdminSidebarMenus = ({ data }: AdminSidebarMenusProps) => {
  return (
    <CardView className="flex w-full flex-col gap-2">
      {data.map((menu) => (
        <Row
          key={menu.id}
          className="w-full gap-2 rounded-sm px-1 py-2 hover:scale-x-105 hover:bg-charcoal active:opacity-85"
          alignItems="center"
          onClick={menu.onClick}
        >
          {!!menu.lefticon && <IconSvg name={menu.lefticon} />}
          {!!menu.title && <Text size="body">{menu.title}</Text>}
        </Row>
      ))}
    </CardView>
  );
};
