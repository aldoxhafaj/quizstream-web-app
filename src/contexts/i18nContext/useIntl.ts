import { useContext } from 'react';
import { useIntl as useReactIntl } from 'react-intl';

import { I18nContext } from './IntlProvider';

export const useIntl = () => {
  const context = useContext(I18nContext);
  const reactIntl = useReactIntl();

  if (!context) {
    throw new Error('useIntl must be used within IntlProvider!');
  }

  return {
    ...reactIntl,
    ...context,
  };
};
