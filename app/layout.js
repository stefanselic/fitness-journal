import { Inter } from 'next/font/google';
import { logout } from './(auth)/logout/actions';
import Link from 'next/link';
import { LogoutButton } from './LogoutButton';
import { cookies } from 'next/headers';
import { getUserBySessionToken } from '../database/users';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FitTRACK',
  description: 'Fitness journal for tracking your exercises',
};

export default async function RootLayout({ children }) {
  // 1. get the session token from the cookie
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navigationBar}>
          <div>
            <Link href="/">Landing Page</Link>
            <Link href="/homepage">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/exercises">Exercises</Link>
          </div>
          <div>
            {user ? (
              <>
                <div>{user.username}</div>
                <LogoutButton logout={logout} />
              </>
            ) : (
              <>
                <Link href="/register">Register</Link>
                <Link href="/login">Login</Link>
              </>
            )}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
