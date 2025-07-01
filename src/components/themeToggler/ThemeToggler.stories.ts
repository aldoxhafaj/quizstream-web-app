import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeToggler } from './ThemeToggler';

const meta = {
  title: 'ThemeToggler',
  component: ThemeToggler,
  tags: ['autodocs'],
  parameters: {
    enableTheme: true,
  },

  argTypes: {
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ThemeToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeTogglerStory: Story = {
  args: {
    size: 'sm',
    radius: 'sm',
    color: 'default',
  },
};
