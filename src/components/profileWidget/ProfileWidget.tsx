import { CardView, Row, Text } from '@quizstream/components/layouts';
import { ThemeToggler } from '@quizstream/components/themeToggler';

import type { ProfileWidgetProps } from './types';

export const ProfileWidget = ({ subtitle, title }: ProfileWidgetProps) => {
  return (
    <CardView className="w-full">
      <Row alignItems="center" justifyContent="between">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
          style={{ width: 40, height: 40 }}
        />

        <ThemeToggler />
      </Row>

      {!!subtitle && (
        <Text className="mt-3 text-cloud" size="body">
          {subtitle}
        </Text>
      )}

      {!!title && (
        <Text className="mt-3" size="h5">
          {title}
        </Text>
      )}
    </CardView>
  );
};
