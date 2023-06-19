import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../database/sessions';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect('/login?returnTo=/homepage');
  return (
    <main>
      <h1>HOMEPAGE</h1>
      <div>
        <h3>EXERCISE 1</h3>
      </div>
      <div>
        <h3>EXERCISE 2</h3>
      </div>
      <div>
        <h3>EXERCISE 3</h3>
      </div>
    </main>
  );
}
