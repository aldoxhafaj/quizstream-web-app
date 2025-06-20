import { MainWrapper, Text } from '@quizstream/components/layouts';
import { useIntl } from '@quizstream/contexts/i18nContext';

export const Dashboard = () => {
  const { formatMessage } = useIntl();

  return (
    <MainWrapper>
      <Text>
        {formatMessage({
          id: 'adminDashboard.title',
          defaultMessage: 'Welcome to admin dashboard!',
        })}
      </Text>
    </MainWrapper>
  );
};
