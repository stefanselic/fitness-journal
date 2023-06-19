'use client';

import { useRouter } from 'next/navigation';

type Props = {
  logout: () => void;
};

export function LogoutButton(props: Props) {
  const router = useRouter();
  return (
    <form>
      <button
        formAction={async () => {
          await props.logout();
          router.refresh();
        }}
      >
        Logout
      </button>
    </form>
  );
}
