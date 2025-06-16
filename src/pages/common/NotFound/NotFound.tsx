import { Text } from '@quizstream/components/layouts';
import { useIntl } from '@quizstream/contexts/i18nContext';

export const NotFound = () => {
  const { formatMessage } = useIntl();

  return (
    <Text>
      {formatMessage({ id: 'notFound.title', defaultMessage: 'Not found!' })}
    </Text>
  );
};
