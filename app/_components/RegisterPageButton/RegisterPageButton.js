'use client';

import { useRouter } from 'next/navigation';
import styles from './RegisterPageButton.module.scss';

export default function RegisterPageButton() {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => router.push('/register')}
    >
      Sign up
    </button>
  );
}
