import {
  assignment,
  bubbles,
  chevronLeft,
  chevronRight,
  dashboard,
  exit,
  moon,
  noAvatar,
  roundedPlay,
  settings,
  sun,
  team,
  user,
} from '@quizstream/assets/svg';

export enum IconNameSVG {
  CHEVRON_RIGHT = 'chevronRight',
  CHEVRON_LEFT = 'chevronLeft',
  MOON = 'moon',
  SUN = 'sun',
  SETTINGS = 'settings',
  BUBBLES = 'bubbles',
  DASHBOARD = 'dashboard',
  ROUNDED_PLAY = 'roundedPlay',
  TEAM = 'team',
  USER = 'user',
  ASSIGNMENT = 'assignment',
  EXIT = 'exit',
  NO_AVATAR = 'noAvatar',
}

export const SvgIcons: Record<
  IconNameSVG,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  chevronLeft,
  chevronRight,
  moon,
  sun,
  settings,
  bubbles,
  dashboard,
  roundedPlay,
  team,
  user,
  assignment,
  exit,
  noAvatar,
};
