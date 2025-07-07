import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './Avatar';

const meta = {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],

  argTypes: {
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
    radius: {
      options: ['sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarStory: Story = {
  args: {
    name: 'John Doe',
    image: 'none',
    size: 'xs',
    radius: 'sm',
  },
};
