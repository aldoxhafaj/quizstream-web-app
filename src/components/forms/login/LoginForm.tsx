import {
  CheckboxField,
  FormWrapper,
  InputField,
} from '@quizstream/components/hookForm';
import { Column, Row, Text } from '@quizstream/components/layouts';
import { TextPairAction } from '@quizstream/components/textPairAction';
import { ThemeToggler } from '@quizstream/components/themeToggler';
import { useIntl } from '@quizstream/contexts/i18nContext';

import type { LoginFormProps } from './types';
import { useLoginForm } from './useLoginForm';

export const LoginForm = ({
  onSignupClick,
  onTermsClick,
  onSubmit,
}: LoginFormProps) => {
  const { formatMessage } = useIntl();
  const { form } = useLoginForm();

  return (
    <FormWrapper
      className="w-1/2 p-2xl max-md:w-full max-md:gap-2 max-md:p-6 max-md:pb-0"
      form={form}
      buttonProps={{
        className: 'mt-4',
        title: formatMessage({
          id: 'common.login.label',
          defaultMessage: 'Login',
        }),
        color: 'secondary',
        onSubmit,
      }}
    >
      <Column className="mb-4 gap-2 max-md:mb-2">
        <Row alignItems="center" justifyContent="between">
          <Text size="h4">
            {formatMessage({
              id: 'common.login.label',
              defaultMessage: 'Login',
            })}
          </Text>

          <ThemeToggler />
        </Row>

        <TextPairAction
          primaryMessage={formatMessage({
            id: 'loginForm.noAccount.label',
            defaultMessage: `Don't have an account?`,
          })}
          actionLabel={formatMessage({
            id: 'loginForm.signup.label',
            defaultMessage: 'Sign up',
          })}
          underlinedAction
          onClick={onSignupClick}
        />
      </Column>

      <InputField
        name="email"
        label={formatMessage({
          id: 'loginForm.email.label',
          defaultMessage: 'Email',
        })}
        placeholder={formatMessage({
          id: 'loginForm.email.placeholder',
          defaultMessage: 'JohnDoe@example.com',
        })}
      />

      <InputField
        name="password"
        label={formatMessage({
          id: 'loginForm.password.label',
          defaultMessage: 'Password',
        })}
        placeholder={formatMessage({
          id: 'loginForm.password.placeholder',
          defaultMessage: 'Enter your password',
        })}
      />

      <CheckboxField
        name="agreeToTermsAndConditions"
        rightContent={
          <Text
            size="body"
            className="text-grape underline"
            onClick={onTermsClick}
          >
            {formatMessage({
              id: 'loginForm.termsAndConditions.label',
              defaultMessage: 'Terms&Conditions',
            })}
          </Text>
        }
      >
        <Text size="body">
          {formatMessage({
            id: 'loginForm.agreement.label',
            defaultMessage: 'Agree to',
          })}
        </Text>
      </CheckboxField>
    </FormWrapper>
  );
};
