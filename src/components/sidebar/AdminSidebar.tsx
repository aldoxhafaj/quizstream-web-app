import { IconButton } from '@quizstream/components/iconButton';
import { IconSvg } from '@quizstream/components/iconSvg';
import { CardView, Column, Row, Text } from '@quizstream/components/layouts';
import { ProfileWidget } from '@quizstream/components/profileWidget';
import { useIntl } from '@quizstream/contexts/i18nContext';
import { IconNameSVG } from '@quizstream/themes/svgIcons';

import { useAdminSidebar } from './useAdminSidebar';

export const AdminSidebar = () => {
  const { formatMessage } = useIntl();
  const { sidebarMenus, onSettingsClick, onLogoutClick } = useAdminSidebar();

  return (
    <Column className="h-full w-1/6 overflow-x-hidden" justifyContent="between">
      <Column className="w-full gap-6">
        <Row className="gap-3" alignItems="center">
          <IconButton size="md" icon={IconNameSVG.BUBBLES} />
          <Text>
            {formatMessage({
              id: 'adminSidebar.title',
              defaultMessage: 'Quizstream',
            })}
          </Text>
        </Row>

        <ProfileWidget
          subtitle="Monday, March 24"
          title={formatMessage({
            id: 'adminSidebar.profileWidget.title',
            defaultMessage: 'Welcome back, George!',
          })}
        />

        <CardView className="flex w-full flex-col gap-2">
          {sidebarMenus.map((menu) => (
            <Row
              className="w-full gap-2 rounded-sm px-1 py-2 hover:scale-x-105 hover:bg-charcoal active:opacity-85"
              alignItems="center"
              onClick={menu.onClick}
            >
              <IconSvg name={menu.lefticon} />
              <Text size="body">{menu.title}</Text>
            </Row>
          ))}
        </CardView>

        <CardView
          className="flex w-full items-center gap-2"
          onClick={onSettingsClick}
        >
          <IconSvg name={IconNameSVG.SETTINGS} />
          <Text size="body">
            {formatMessage({
              id: 'adminSidebar.menu.settings',
              defaultMessage: 'Settings',
            })}
          </Text>
        </CardView>
      </Column>

      <CardView
        className="flex w-full items-center gap-2"
        onClick={onLogoutClick}
      >
        <IconSvg className="stroke-base" name={IconNameSVG.EXIT} />
        <Text size="body">
          {formatMessage({
            id: 'adminSidebar.menu.logout',
            defaultMessage: 'Logout',
          })}
        </Text>
      </CardView>
    </Column>
  );
};
