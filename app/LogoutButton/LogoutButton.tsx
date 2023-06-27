'use client';

import { LogOutIcon } from 'lucide-react';
import styles from './LogoutButton.module.scss';

type Props = {
  logout: () => void;
};

export function LogoutButton(props: Props) {
  return (
    <form>
      <button
        className={styles.logoutButton}
        formAction={async () => {
          await props.logout();
        }}
      >
        <LogOutIcon width={25} height={25} />
      </button>
    </form>
  );
}
