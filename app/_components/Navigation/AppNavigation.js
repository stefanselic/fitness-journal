import { cookies } from 'next/headers';
import Link from 'next/link';
import { getUserBySessionToken } from '../../../database/users';
import styles from './AppNavigation.module.scss';
import { LogoutButton } from '../../LogoutButton';
import { logout } from '../../(auth)/logout/actions';

export default async function AppNavigation() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <div className={styles.navigationBarContainer}>
      <nav className={styles.navigationBar}>
        <Link href={`/profile/${user.username}`}>Profile</Link>
        <Link href="/homepage">Homepage</Link>
        <Link href="/exercises">Exercises</Link>
        <LogoutButton logout={logout} />
      </nav>
    </div>
  );
}
