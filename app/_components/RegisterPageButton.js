'use client';

import { useRouter } from 'next/navigation';

export default function RegisterPageButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/register')}>
      Sign up
    </button>
  );
}
