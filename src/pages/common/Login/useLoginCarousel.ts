import type { Slide } from '@quizstream/components/carousel/types';
import { useIntl } from '@quizstream/contexts/i18nContext';
import { Animation } from '@quizstream/themes/animations';
import { horizontalScale } from '@quizstream/utils/calculations';

const ANIMATION_SIZE = horizontalScale(320);
export const useLoginCarousel = () => {
  const { formatMessage } = useIntl();

  const slides: Slide[] = [
    {
      id: 1,
      title: formatMessage({
        id: 'login.carousel.firstSlideTitle',
        defaultMessage: 'Ready to test your limits?',
      }),
      description: formatMessage({
        id: 'login.carousel.firstSlideDescription',
        defaultMessage:
          'Challenge your mind with questions that will push your knowledge to the edge.',
      }),
      animation: {
        name: Animation.QUESTION_MARK_TRIPLON,
        size: ANIMATION_SIZE,
      },
    },
    {
      id: 2,
      title: formatMessage({
        id: 'login.carousel.secondSlideTitle',
        defaultMessage: 'Think Fast, Score Big!',
      }),
      description: formatMessage({
        id: 'login.carousel.secondSlideDescription',
        defaultMessage: `Time is ticking—prove you're the quickest quiz master and climb the leaderboard.`,
      }),
      animation: { name: Animation.QUESTION_MARK, size: ANIMATION_SIZE },
    },
    {
      id: 3,
      title: formatMessage({
        id: 'login.carousel.thirdSlideTitle',
        defaultMessage: "Unlock Your Brain's Potential!",
      }),
      description: formatMessage({
        id: 'login.carousel.thirdSlideDescription',
        defaultMessage:
          'Explore fun, challenging quizzes that sharpen your skills and ignite curiosity.',
      }),
      animation: { name: Animation.BRAIN_WAVE, size: ANIMATION_SIZE },
    },
    {
      id: 4,
      title: formatMessage({
        id: 'login.carousel.forthSlideTitle',
        defaultMessage: 'Can You Beat the Best?',
      }),
      description: formatMessage({
        id: 'login.carousel.forthSlideDescription',
        defaultMessage:
          'Join a competitive quiz experience and see if you have what it takes to be a champion.',
      }),
      animation: { name: Animation.BRAIN_WAVE, size: ANIMATION_SIZE },
    },
  ];

  return { slides };
};
