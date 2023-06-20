'use client';

import { useRouter } from 'next/navigation';
import styles from './LoginPageButton.module.scss';

export default function LoginPageButton() {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => router.push('/login')}
    >
      Login
    </button>
  );
}
