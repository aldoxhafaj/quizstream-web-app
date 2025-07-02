import { CardView, MainWrapper, Text } from '@quizstream/components/layouts';
import { useIntl } from '@quizstream/contexts/i18nContext';

export const Dashboard = () => {
  const { formatMessage } = useIntl();

  return (
    <MainWrapper className="px-4 py-6" hasSidebar>
      <CardView className="w-full">
        <Text>
          {formatMessage({
            id: 'adminDashboard.title',
            defaultMessage: 'Welcome to admin dashboard!',
          })}
        </Text>
      </CardView>
    </MainWrapper>
  );
};
