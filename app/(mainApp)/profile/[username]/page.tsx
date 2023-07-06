import { notFound, redirect } from 'next/navigation';
import { getUserByUsername } from '../../../../database/users';
import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../../database/sessions';
import styles from './page.module.scss';
import ImageUpload from './ProfileForm';

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

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <div>
          <b className={styles.username}>
            {capitalizeFirstLetter(user.username)}
          </b>
        </div>
        <ImageUpload />
      </div>
    </main>
  );
}
