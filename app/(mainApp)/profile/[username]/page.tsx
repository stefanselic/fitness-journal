// import { notFound } from 'next/navigation';
import { notFound, redirect } from 'next/navigation';
import { getUserByUsername } from '../../../../database/users';
import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../../database/sessions';
import styles from './page.module.scss';

type Props = {
  params: { username: string };
};

export default async function ProfileUsernamePage({ params }: Props) {
  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect('/login?returnTo=/homepage');
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  return (
    <>
      <div></div>
      <main className={styles.profileContainer}>
        <h1>PROFILE</h1>
        <div>
          Id: <b>{user.id}</b>
        </div>
        <div>
          Username: <b>{user.username}</b>
        </div>
      </main>
    </>
  );
}
