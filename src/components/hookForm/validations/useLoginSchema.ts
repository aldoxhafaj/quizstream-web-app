import { useIntl } from '@quizstream/contexts/i18nContext';
import {
  EMAIL_REGEX,
  ONE_UPPERCASE_LETTER_REGEX,
} from '@quizstream/utils/constants';
import { boolean, object, string } from 'yup';

const PASSWORD_MIN_LENGTH = 6;
export const useLoginSchema = () => {
  const { formatMessage } = useIntl();

  const loginSchema = {
    email: string()
      .matches(
        EMAIL_REGEX,
        formatMessage({
          id: 'loginSchema.invalid.email',
          defaultMessage: 'Invalid email!',
        }),
      )
      .required(
        formatMessage({
          id: 'loginSchema.required.email',
          defaultMessage: 'Email is required!',
        }),
      ),
    password: string()
      .required(
        formatMessage({
          id: 'loginSchema.required.password',
          defaultMessage: 'Password is required!',
        }),
      )
      .min(
        PASSWORD_MIN_LENGTH,
        formatMessage(
          {
            id: 'loginSchema.minLength.password',
            defaultMessage: 'Password must be at least {minLength} characters!',
          },
          {
            minLength: PASSWORD_MIN_LENGTH,
          },
        ),
      )
      .matches(
        ONE_UPPERCASE_LETTER_REGEX,
        formatMessage({
          id: 'loginSchema.oneUppercaseLetter.password',
          defaultMessage:
            'Password must contain at least one uppercase letter!',
        }),
      ),
    agreeToTermsAndConditions: boolean()
      .oneOf(
        [true],
        formatMessage({
          id: 'common.agreeOnTermsAndConditions.error',
          defaultMessage: 'You must accept the terms and conditions!',
        }),
      )
      .required(
        formatMessage({
          id: 'common.agreeOnTermsAndConditions.error',
          defaultMessage: 'You must accept the terms and conditions!',
        }),
      ),
  };

  return object().shape(loginSchema);
};
