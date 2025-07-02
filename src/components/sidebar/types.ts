import type { IconNameSVG } from '@quizstream/themes/svgIcons';

export type SidebarMenu = {
  id: number;
  title: string;
  lefticon: IconNameSVG;
  onClick: () => void;
};
