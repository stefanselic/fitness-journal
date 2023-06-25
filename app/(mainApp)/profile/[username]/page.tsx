// import { notFound } from 'next/navigation';
import { notFound, redirect } from 'next/navigation';
import { getUserByUsername } from '../../../../database/users';
import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../../database/sessions';
import styles from './page.module.scss';
import Image from 'next/image';

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
    <main className={styles.profileContainer}>
      <div>
        <Image
          alt="exercise"
          src="/images/profile.png"
          width={500}
          height={350}
        />
      </div>
      <div className={styles.infoContainer}>
        <div>
          Id: <b>{user.id}</b>
        </div>
        <div>
          Username: <b>{user.username}</b>
        </div>
      </div>
    </main>
  );
}
