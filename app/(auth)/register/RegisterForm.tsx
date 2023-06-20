'use client';

import { useState } from 'react';
import styles from './RegisterForm.module.scss';
import { RegisterResponseBodyPost } from '../../api/(auth)/register/route';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function register() {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    const data: RegisterResponseBodyPost = await response.json();

    if ('error' in data) {
      setError(data.error);
      return;
    }

    console.log(data.user);
    router.push(`/profile/${data.user.username}`);
    // we may have in the future revalidatePath()
    router.refresh();
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className={styles.inputContainer}>
        <label className={styles.usernameInput}>
          Username:
          <input
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </label>
        <label className={styles.passwordInput}>
          Password:
          <input
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            type="password"
          />
        </label>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={async () => await register()}
        >
          Sign up
        </button>
      </div>
      {error !== '' && <div className={styles.error}>{error}</div>}
    </form>
  );
}
