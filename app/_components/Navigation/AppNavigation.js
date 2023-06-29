import { cookies } from 'next/headers';
import Link from 'next/link';
import { getUserBySessionToken } from '../../../database/users';
import styles from './AppNavigation.module.scss';
import { LogoutButton } from '../../LogoutButton/LogoutButton';
import { logout } from '../../(auth)/logout/actions';
import Image from 'next/image';
import { Apple, DumbbellIcon, HomeIcon, User } from 'lucide-react';

export default async function AppNavigation() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <div className={styles.navigationBarContainer}>
      <nav className={styles.navigationBar}>
        <Link href="/homepage">
          <HomeIcon width={25} height={25} />
        </Link>
        {user && (
          <Link href={`/profile/${user.username}`}>
            <User width={25} height={25} />
          </Link>
        )}
        <Link href="/exercises">
          <Image
            alt="exercises"
            src="/images/dumbell.png"
            width={25}
            height={25}
          />
        </Link>
        <Link href="/calories">
          <Apple width={25} height={25} />
        </Link>
        <LogoutButton logout={logout} />
      </nav>
    </div>
  );
}
