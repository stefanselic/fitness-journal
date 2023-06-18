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
    }
    if ('user' in data) {
      console.log(data.user);
      router.push(`/profile/${data.user.username}`);
      // we may have in the future revalidatePath()
      router.refresh();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1>SIGN UP</h1>
      <label>
        username:
        <input
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
      </label>
      <label>
        password:
        <input
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          type="password"
        />
      </label>
      <button onClick={async () => await register()}>Sign up</button>
      {error !== '' && <div className={styles.error}>{error}</div>}
    </form>
  );
}
