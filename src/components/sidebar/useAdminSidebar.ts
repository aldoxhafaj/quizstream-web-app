import { useIntl } from '@quizstream/contexts/i18nContext';
import { IconNameSVG } from '@quizstream/themes/svgIcons';
import { useNavigate } from 'react-router';

import type { SidebarMenu } from './types';

export const useAdminSidebar = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  const onSettingsClick = () => {
    navigate('/admin/settings');
  };

  const onLogoutClick = () => {
    //TODO
    navigate('/');
  };

  const sidebarMenus: SidebarMenu[] = [
    {
      id: 1,
      title: formatMessage({
        id: 'adminSidebar.menu.dashboard',
        defaultMessage: 'Dashboard',
      }),
      lefticon: IconNameSVG.DASHBOARD,
      onClick: () => navigate('/admin/dashboard'),
    },
    {
      id: 2,
      title: formatMessage({
        id: 'adminSidebar.menu.livestream',
        defaultMessage: 'Livestream',
      }),
      lefticon: IconNameSVG.ROUNDED_PLAY,
      onClick: () => navigate('/admin/livestream'),
    },
    {
      id: 3,
      title: formatMessage({
        id: 'adminSidebar.menu.quizzes',
        defaultMessage: 'Quizzes',
      }),
      lefticon: IconNameSVG.ASSIGNMENT,
      onClick: () => navigate('/admin/quizzes'),
    },
    {
      id: 4,
      title: formatMessage({
        id: 'adminSidebar.menu.users',
        defaultMessage: 'Users',
      }),
      lefticon: IconNameSVG.USER,
      onClick: () => navigate('/admin/users'),
    },
    {
      id: 5,
      title: formatMessage({
        id: 'adminSidebar.menu.teams',
        defaultMessage: 'Teams',
      }),
      lefticon: IconNameSVG.TEAM,
      onClick: () => navigate('/admin/teams'),
    },
  ];

  return { sidebarMenus, onSettingsClick, onLogoutClick };
};
