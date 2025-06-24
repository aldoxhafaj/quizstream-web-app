import { yupResolver } from '@hookform/resolvers/yup';
import { FormWrapper, useLoginSchema } from '@quizstream/components/hookForm';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      agreeToTermsAndConditions: false,
    },
    mode: 'onSubmit',
    resolver: yupResolver(useLoginSchema()),
    reValidateMode: 'onChange',
  });

  //TODO create login form
  return <FormWrapper form={form}>{null}</FormWrapper>;
};
