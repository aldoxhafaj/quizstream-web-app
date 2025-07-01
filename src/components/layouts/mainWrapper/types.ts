import type {
  AlignItems,
  JustifyContent,
} from '@quizstream/components/layouts/types';
import type { ReactNode } from 'react';

export type MainWrapperProps = {
  className?: string;
  children: ReactNode;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
};
