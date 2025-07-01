import { Carousel } from '@quizstream/components/carousel';
import { LoginForm } from '@quizstream/components/forms';
import { Container, MainWrapper, Row } from '@quizstream/components/layouts';

import { useLogin } from './useLogin';
import { useLoginCarousel } from './useLoginCarousel';

export const Login = () => {
  const { slides } = useLoginCarousel();
  const { onSignupClick, onTermsClick, onLoginSubmit } = useLogin();

  return (
    <MainWrapper alignItems="center" justifyContent="center">
      <Row className="w-9/12 rounded-sm bg-glow shadow-x3 max-xl:w-10/12 max-md:flex-col-reverse!">
        <Container className="w-1/2 p-2xl max-md:w-full max-md:p-6">
          <Carousel slides={slides} loop />
        </Container>

        <LoginForm
          onSignupClick={onSignupClick}
          onTermsClick={onTermsClick}
          onSubmit={onLoginSubmit}
        />
      </Row>
    </MainWrapper>
  );
};
