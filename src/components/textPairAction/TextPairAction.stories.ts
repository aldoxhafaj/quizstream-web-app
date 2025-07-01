import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { TextPairAction } from './TextPairAction';

const meta = {
  title: 'TextPairAction',
  component: TextPairAction,
  tags: ['autodocs'],
  parameters: {
    enableTheme: true,
  },

  argTypes: {
    primaryMessageSize: {
      options: ['h2', 'body', 'large'],
      control: { type: 'select' },
    },

    actionLabelSize: {
      options: ['h2', 'body', 'large'],
      control: { type: 'select' },
    },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof TextPairAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextPairActionStory: Story = {
  args: {
    primaryMessage: "Don't you have an account?",
    actionLabel: 'Sign in',
    primaryMessageSize: 'body',
    actionLabelSize: 'body',
    underlinedAction: true,
  },
};
