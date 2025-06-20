import { Button } from '@quizstream/components/button';
import { Text } from '@quizstream/components/layouts/text';
import { type FieldValues, FormProvider } from 'react-hook-form';

import type { FormWrapperProps } from './types';

export const FormWrapper = <T extends FieldValues>({
  children,
  form,
  buttonProps,
}: FormWrapperProps<T>) => {
  const { formState } = form;

  const isInProgress = formState.isSubmitting;
  const isFormValid = formState.isValid && formState.isDirty;
  const isSubmitDisabled = !isFormValid || isInProgress;

  return (
    <FormProvider {...form}>
      <form>
        {children}

        {!!buttonProps && (
          <Button
            isLoading={isInProgress}
            isDisabled={isSubmitDisabled}
            onPress={() => form.handleSubmit(buttonProps.onSubmit)}
          >
            <Text>{buttonProps.title}</Text>
          </Button>
        )}
      </form>
    </FormProvider>
  );
};
