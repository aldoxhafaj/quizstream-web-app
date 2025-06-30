import { ContentLoader } from '@quizstream/components/contentLoaders';
import { ContentLoaderType } from '@quizstream/components/contentLoaders/types';
import { Animations } from '@quizstream/themes/animations';
import Lottie from 'lottie-react';
import { useState } from 'react';

import type { LottieViewProps } from './types';

export const LottieView = ({
  name,
  width,
  height,
  autoplay = true,
  loop = false,
  enableLoading = false,
  enableAnimation = true,
}: LottieViewProps) => {
  const [isLoading, setIsLoading] = useState(enableLoading);

  return (
    <div className="relative" style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 size-full">
          <ContentLoader type={ContentLoaderType.LOTTIE_ANIMATION} />
        </div>
      )}

      {enableAnimation && (
        <Lottie
          animationData={Animations[name]}
          autoPlay={autoplay}
          loop={loop}
          onDOMLoaded={() => setIsLoading(false)}
          style={{ width, height }}
        />
      )}
    </div>
  );
};
