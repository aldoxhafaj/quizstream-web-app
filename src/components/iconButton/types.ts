import type { ButtonProps } from '@quizstream/components/button/types';
import type { IconNameSVG } from '@quizstream/themes/svgIcons';

export type IconButtonProps = {
  className?: string;
  iconClassName?: string;
  icon: IconNameSVG;
} & Pick<ButtonProps, 'size' | 'color' | 'radius' | 'onClick'>;
