import type { TextSize } from '@quizstream/components/layouts/text/types';

export enum TextColorScheme {
  primary = 'text-slate',
  secondary = 'text-grape',
}

export type TextPairActionProps = {
  className?: string;
  primaryMessage: string;
  actionLabel: string;
  primaryMessageColor?: keyof typeof TextColorScheme;
  actionLabelColor?: keyof typeof TextColorScheme;
  primaryMessageSize?: TextSize;
  actionLabelSize?: TextSize;
  underlinedAction?: boolean;
  onClick: () => void;
};
