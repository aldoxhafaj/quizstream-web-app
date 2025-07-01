import { IconNameSVG } from '@quizstream/themes/svgIcons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { IconButton } from './IconButton';

const meta = {
  title: 'IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: { enableTheme: true },

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
    icon: {
      options: [
        IconNameSVG.CHEVRON_LEFT,
        IconNameSVG.CHEVRON_RIGHT,
        IconNameSVG.MOON,
        IconNameSVG.SUN,
      ],
      control: { type: 'radio' },
    },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButtonStory: Story = {
  args: {
    color: 'default',
    size: 'sm',
    radius: 'sm',
    icon: IconNameSVG.MOON,
  },
};
