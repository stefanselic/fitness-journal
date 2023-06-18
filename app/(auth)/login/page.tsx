import LoginForm from './LoginForm';

type Props = { searchParams: { returnTo?: string | undefined } };

export default function LoginPage({ searchParams }: Props) {
  console.log('My search params', searchParams);
  return <LoginForm returnTo={searchParams.returnTo} />;
}
