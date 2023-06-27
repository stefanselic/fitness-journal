import { cookies } from 'next/headers';
import Link from 'next/link';
import { getUserBySessionToken } from '../../../database/users';
import styles from './AppNavigation.module.scss';
import { LogoutButton } from '../../LogoutButton/LogoutButton';
import { logout } from '../../(auth)/logout/actions';
import Image from 'next/image';
import {
  Dumbbell,
  DumbbellIcon,
  HomeIcon,
  LucideDumbbell,
  User,
} from 'lucide-react';

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
          {/* <Image
            alt="homepage"
            src="/images/vector.png"
            width={25}
            height={25}
          /> */}
          <HomeIcon width={25} height={25} />
        </Link>
        {user && (
          <Link href={`/profile/${user.username}`}>
            {/* <Image
              alt="profile"
              src="/images/profile-icon.png"
              width={20}
              height={25}
            /> */}
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
        <LogoutButton logout={logout} />
      </nav>
    </div>
  );
}
