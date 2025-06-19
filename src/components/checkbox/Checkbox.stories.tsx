import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
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
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
  },

  args: { onValueChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  render: (args) => <Checkbox {...args}>Agree to terms & conditions</Checkbox>,
  args: {
    color: 'default',
    size: 'lg',
    radius: 'sm',
    lineThrough: false,
    defaultSelected: false,
    isRequired: false,
    isReadOnly: false,
    isDisabled: false,
    isIndeterminate: false,
    isInvalid: false,
  },
};
