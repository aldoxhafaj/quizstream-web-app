import { chevronLeft, chevronRight, moon, sun } from '@quizstream/assets/svg';

export enum IconNameSVG {
  CHEVRON_RIGHT = 'chevronRight',
  CHEVRON_LEFT = 'chevronLeft',
  MOON = 'moon',
  SUN = 'sun',
}

export const SvgIcons: Record<
  IconNameSVG,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  chevronLeft,
  chevronRight,
  moon,
  sun,
};
