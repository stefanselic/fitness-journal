'use client';

import { useRouter } from 'next/navigation';

export default function LoginPageButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/login')}>
      Login
    </button>
  );
}
