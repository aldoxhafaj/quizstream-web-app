import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginSchema } from '@quizstream/components/hookForm';
import { useForm } from 'react-hook-form';

import type { LoginFormValues } from './types';

const defaultValues: LoginFormValues = {
  email: '',
  password: '',
  agreeToTermsAndConditions: false,
};

export const useLoginForm = () => {
  const form = useForm<LoginFormValues>({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(useLoginSchema()),
    reValidateMode: 'onChange',
  });

  return { form };
};
