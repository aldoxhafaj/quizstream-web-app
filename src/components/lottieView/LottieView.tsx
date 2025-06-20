import { ContentLoader } from '@quizstream/components/contentLoaders';
import { ContentLoaderType } from '@quizstream/components/contentLoaders/types';
import { Container } from '@quizstream/components/layouts/container';
import { Animations } from '@quizstream/themes/animations';
import Lottie from 'lottie-react';
import { useState } from 'react';

import type { LottieViewProps } from './types';

export const LottieView = ({
  containerClassname,
  name,
  width,
  height,
  autoplay = true,
  loop = false,
  enableLoading = false,
}: LottieViewProps) => {
  const [isLoading, setIsLoading] = useState(enableLoading);

  return (
    <Container classname={containerClassname}>
      <Container classname="relative">
        {isLoading && (
          <div className="absolute inset-0" style={{ width, height }}>
            <ContentLoader type={ContentLoaderType.LOTTIE_ANIMATION} />
          </div>
        )}

        <Lottie
          animationData={Animations[name]}
          autoPlay={autoplay}
          loop={loop}
          onDOMLoaded={() => setIsLoading(false)}
          style={{ width, height }}
        />
      </Container>
    </Container>
  );
};
