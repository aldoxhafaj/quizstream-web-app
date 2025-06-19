import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Input } from './Input';

const meta = {
  title: 'Input',
  component: Input,
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
    label: {
      options: ['Email', 'Password', 'none'],
      control: { type: 'radio' },
      mapping: {
        none: undefined,
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    variant: {
      options: ['bordered', 'faded', 'flat', 'underlined'],
      control: { type: 'select' },
    },
    type: {
      options: ['text', 'password', 'file'],
      control: { type: 'radio' },
    },
    labelPlacement: {
      options: ['inside', 'outside-left', 'outside'],
      control: { type: 'radio' },
    },
    placeholder: {
      options: ['your-email@example.com', 'none'],
      control: { type: 'select' },
      mapping: {
        none: undefined,
      },
    },
    value: {
      options: ['aldo@gmail.com', 'none'],
      control: { type: 'select' },
      mapping: {
        none: undefined,
      },
    },
    errorMessage: {
      options: ['This input is required!', 'none'],
      control: { type: 'select' },
      mapping: {
        none: undefined,
      },
    },
  },

  args: { onChange: fn(), onClear: fn(), onValueChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
  args: {
    color: 'default',
    label: 'Email',
    size: 'md',
    variant: 'flat',
    type: 'text',
    labelPlacement: 'inside',
    isClearable: false,
    isRequired: false,
    isReadOnly: false,
    isDisabled: false,
    isInvalid: false,
  },
};
