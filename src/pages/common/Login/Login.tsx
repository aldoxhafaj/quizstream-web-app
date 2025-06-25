import { Carousel } from '@quizstream/components/carousel';
import { MainWrapper } from '@quizstream/components/layouts';

import { useLoginCarousel } from './useLoginCarousel';

export const Login = () => {
  const { slides } = useLoginCarousel();

  return (
    <MainWrapper alignItems="center" justifyContent="center">
      <Carousel slides={slides} />
    </MainWrapper>
  );
};
