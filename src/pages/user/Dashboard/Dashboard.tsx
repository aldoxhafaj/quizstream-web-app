import { Text } from '@quizstream/components/layouts';
import { useIntl } from '@quizstream/contexts/i18nContext';

export const Dashboard = () => {
  const { formatMessage } = useIntl();

  return (
    <Text>
      {formatMessage({
        id: 'userDashboard.title',
        defaultMessage: 'Welcome to user dashboard!',
      })}
    </Text>
  );
};
