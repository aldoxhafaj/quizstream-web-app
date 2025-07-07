import { ThemeToggler } from '@quizstream/components/themeToggler';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProfileWidget } from './ProfileWidget';

const meta = {
  title: 'ProfileWidget',
  component: ProfileWidget,
  tags: ['autodocs'],

  parameters: {
    enableTheme: true,
  },

  argTypes: {
    title: {
      options: ['Welcome back, George!', 'none'],
      control: { type: 'select' },
      mapping: {
        none: undefined,
      },
    },
    subtitle: {
      options: ['Monday, March 24', 'none'],
      control: { type: 'select' },
      mapping: {
        none: undefined,
      },
    },
    image: {
      options: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'none',
      ],
      control: { type: 'select' },
      mapping: {
        none: undefined,
      },
    },
    name: {
      options: ['John Doe', 'George', 'Alice Johnson', 'none'],
      control: { type: 'select' },
      mapping: {
        none: undefined,
      },
    },
    avatarRadius: {
      options: ['sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
    avatarSize: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ProfileWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileWidgetStory: Story = {
  args: {
    className: 'w-96 min-h-32 p-1',
    rightContent: <ThemeToggler />,
    name: 'George',
    title: 'Welcome back, George!',
    subtitle: 'Monday, March 24',
    avatarSize: 'xs',
    avatarRadius: 'sm',
    image: 'none',
  },
};
