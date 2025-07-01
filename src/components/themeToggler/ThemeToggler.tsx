import { IconButton } from '@quizstream/components/iconButton';
import { useTheme, useThemeToggler } from '@quizstream/contexts/themeContext';
import { IconNameSVG } from '@quizstream/themes/svgIcons';
import { Theme } from '@quizstream/types/theme';

import type { ThemeTogglerProps } from './types';

export const ThemeToggler = ({
  className,
  iconClassName,
  size = 'sm',
  radius = 'sm',
  color = 'default',
}: ThemeTogglerProps) => {
  const { isDarkMode } = useTheme();
  const { setThemeOption } = useThemeToggler();

  const icon = isDarkMode ? IconNameSVG.SUN : IconNameSVG.MOON;
  return (
    <IconButton
      className={className}
      icon={icon}
      size={size}
      radius={radius}
      color={color}
      iconClassName={`h-4! w-4! stroke-base ${iconClassName}`}
      onClick={() => setThemeOption(isDarkMode ? Theme.LIGHT : Theme.DARK)}
    />
  );
};
