import { chevronLeft, chevronRight } from '@quizstream/assets/svg';

export enum IconNameSVG {
  CHEVRON_RIGHT = 'chevronRight',
  CHEVRON_LEFT = 'chevronLeft',
}

export const SvgIcons: Record<
  IconNameSVG,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  chevronLeft,
  chevronRight,
};
