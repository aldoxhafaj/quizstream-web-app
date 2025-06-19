import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/locale-data/sq';
import '@formatjs/intl-numberformat/polyfill-force';
import '@formatjs/intl-numberformat/locale-data/en';
import '@formatjs/intl-numberformat/locale-data/sq';
import '@formatjs/intl-datetimeformat/polyfill-force';
import '@formatjs/intl-datetimeformat/locale-data/en';
import '@formatjs/intl-datetimeformat/locale-data/sq';

import { HeroUIProvider } from '@heroui/system';
import { IntlProvider } from '@quizstream/contexts/i18nContext';
import { ThemeProvider } from '@quizstream/contexts/themeContext';
import { ErrorFallback } from '@quizstream/pages/common';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { BrowserRouter } from 'react-router';

import { App } from './App.tsx';

const renderFallbackComponent = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => (
  <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <IntlProvider>
        <ThemeProvider>
          <ErrorBoundary FallbackComponent={renderFallbackComponent}>
            <HeroUIProvider>
              <App />
            </HeroUIProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  </StrictMode>,
);
