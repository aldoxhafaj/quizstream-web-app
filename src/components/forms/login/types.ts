import type { SubmitHandler } from 'react-hook-form';

export type LoginFormValues = {
  email: string;
  password: string;
  agreeToTermsAndConditions: boolean;
};

export type LoginFormProps = {
  onSignupClick: () => void;
  onTermsClick: () => void;
  onSubmit: SubmitHandler<LoginFormValues>;
};
