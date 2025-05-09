import { useSignIn } from './hooks';
import { SignInTemplate } from './template';

export function SignIn() {
  const hookParams = useSignIn();

  const sharedProps = {
    ...hookParams,
  };

  return <SignInTemplate {...sharedProps} />;
}

