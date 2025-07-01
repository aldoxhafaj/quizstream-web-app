import {
  brainWave,
  checkList,
  questionMark,
  questionMarkTriplon,
  somethingWentWrong,
} from '@quizstream/assets/animations';

export enum Animation {
  SOMETHING_WENT_WRONG = 'somethingWentWrong',
  QUESTION_MARK = 'questionMark',
  QUESTION_MARK_TRIPLON = 'questionMarkTriplon',
  BRAIN_WAVE = 'brainWave',
  CHECK_LIST = 'checkList',
}

export const Animations: Record<Animation, unknown> = {
  brainWave,
  questionMark,
  questionMarkTriplon,
  somethingWentWrong,
  checkList,
};
