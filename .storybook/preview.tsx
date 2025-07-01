import type { Preview } from '@storybook/react-vite';
import '../index.css';
import { ThemeProvider } from '../src/contexts/themeContext';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => {
      const { enableTheme } = parameters;

      switch (true) {
        case enableTheme:
          return (
            <ThemeProvider>
              <Story />
            </ThemeProvider>
          );

        default:
          return <Story />;
      }
    },
  ],
};

export default preview;
