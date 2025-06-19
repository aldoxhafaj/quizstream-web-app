import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],

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
    variant: {
      options: [
        'bordered',
        'faded',
        'flat',
        'ghost',
        'light',
        'shadow',
        'solid',
      ],
      control: { type: 'select' },
    },
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
    spinnerPlacement: {
      options: ['start', 'end'],
      control: { type: 'radio' },
    },
  },

  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
  render: (args) => <Button {...args}>Continue</Button>,
  args: {
    color: 'default',
    size: 'lg',
    variant: 'flat',
    radius: 'sm',
    spinnerPlacement: 'start',
    isLoading: false,
    isDisabled: false,
    isIconOnly: false,
    disableRipple: false,
    fullWidth: false,
  },
};
