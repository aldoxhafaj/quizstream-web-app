import type { Preview } from '@storybook/react-vite';
import '../index.css';

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
            <div className="light">
              <Story />
            </div>
          );

        default:
          return <Story />;
      }
    },
  ],
};

export default preview;
