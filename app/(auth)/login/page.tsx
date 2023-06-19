import { cookies } from 'next/headers';
import LoginForm from './LoginForm';
import { getValidSessionByToken } from '../../../database/sessions';
import { redirect } from 'next/navigation';

type Props = { searchParams: { returnTo?: string | string[] } };

export default async function LoginPage({ searchParams }: Props) {
  // if the user is logged in redirect

  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get('sessionToken');
  // 2. check if the sessionToken has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (session) redirect('/homepage');

  console.log('My search params', searchParams);
  return <LoginForm returnTo={searchParams.returnTo} />;
}
