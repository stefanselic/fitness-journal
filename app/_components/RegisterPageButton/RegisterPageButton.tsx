'use client';

import { useRouter } from 'next/navigation';
import styles from './RegisterPageButton.module.scss';

export default function RegisterPageButton() {
  const router = useRouter();

  return (
    <button
      data-test-id="button-to-register-page"
      className={styles.button}
      type="button"
      onClick={() => router.push('/register')}
    >
      Sign up
    </button>
  );
}
