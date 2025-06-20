import { MainWrapper, Text } from '@quizstream/components/layouts';
import { useIntl } from '@quizstream/contexts/i18nContext';

export const Login = () => {
  const { formatMessage } = useIntl();

  return (
    <MainWrapper>
      <Text>
        {formatMessage({ id: 'login.title', defaultMessage: 'Hello world!' })}
      </Text>
    </MainWrapper>
  );
};
