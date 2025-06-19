import { Container } from '@quizstream/components/layouts/container';
import { Animations } from '@quizstream/themes/animations';
import Lottie from 'lottie-react';

import type { LottieViewProps } from './types';

export const LottieView = ({
  containerClassname,
  name,
  width,
  height,
  autoplay = true,
  loop = false,
}: LottieViewProps) => {
  return (
    <Container classname={containerClassname}>
      <Lottie
        animationData={Animations[name]}
        autoPlay={autoplay}
        loop={loop}
        style={{ width, height }}
      />
    </Container>
  );
};
