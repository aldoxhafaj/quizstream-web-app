import { useTheme } from '@quizstream/contexts/themeContext';
import ContentLoader from 'react-content-loader';

export const LottieAnimationLoader = () => {
  const { colors } = useTheme();

  return (
    <ContentLoader
      width="100%"
      height="100%"
      backgroundColor={colors.CHARCOAL}
      foregroundColor={colors.DUSK}
    >
      <rect x="0" y="0" rx="6" ry="6" width="100%" height="100%" />
    </ContentLoader>
  );
};
