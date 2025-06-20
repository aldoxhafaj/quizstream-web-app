import { LottieAnimationLoader } from './lottieAnimationLoader';
import { type ContentLoaderProps, ContentLoaderType } from './types';

export const ContentLoader = ({ type }: ContentLoaderProps) => {
  switch (type) {
    case ContentLoaderType.LOTTIE_ANIMATION:
      return <LottieAnimationLoader />;
    default:
      return null;
  }
};
