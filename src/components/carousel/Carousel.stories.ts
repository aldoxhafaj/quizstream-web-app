import { Animation } from '@quizstream/themes/animations';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Carousel } from './Carousel';
import type { Slide } from './types';

const slides: Slide[] = [
  {
    id: 1,
    title: 'First slide',
    animation: { name: Animation.QUESTION_MARK_TRIPLON, size: 250 },
  },
  {
    id: 2,
    title: 'Second slide',
    animation: { name: Animation.QUESTION_MARK, size: 250 },
  },
  {
    id: 3,
    title: 'Third slide',
    animation: { name: Animation.BRAIN_WAVE, size: 250 },
  },
];

const meta = {
  title: 'Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    enableTheme: true,
  },

  argTypes: {
    duration: {
      options: [1000, 3000, 5000, 10000],
      control: { type: 'radio' },
    },
  },

  args: { onSlideClick: fn() },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarouselStory: Story = {
  args: {
    slides,
    duration: 3000,
    autoplay: true,
    loop: false,
  },
};
