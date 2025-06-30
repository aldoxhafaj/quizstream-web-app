import { Button } from '@quizstream/components/button';
import { Text } from '@quizstream/components/layouts/text';
import { type FieldValues, FormProvider } from 'react-hook-form';

import type { FormWrapperProps } from './types';

export const FormWrapper = <T extends FieldValues>({
  children,
  className,
  form,
  buttonProps,
}: FormWrapperProps<T>) => {
  const { formState } = form;

  const isInProgress = formState.isSubmitting;
  const isSubmitDisabled = isInProgress;
  return (
    <FormProvider {...form}>
      <form className={`flex size-full flex-col gap-4 ${className}`}>
        {children}

        {!!buttonProps && (
          <Button
            isLoading={isInProgress}
            isDisabled={isSubmitDisabled}
            onClick={form.handleSubmit(buttonProps.onSubmit)}
            {...buttonProps}
          >
            <Text>{buttonProps.title}</Text>
          </Button>
        )}
      </form>
    </FormProvider>
  );
};
