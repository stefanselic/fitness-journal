'use client';

import { useRouter } from 'next/navigation';

type Props = {
  logout: () => void;
};

export function LogoutButton(props: Props) {
  return (
    <form>
      <button
        style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
        formAction={async () => {
          await props.logout();
        }}
      >
        Logout
      </button>
    </form>
  );
}
