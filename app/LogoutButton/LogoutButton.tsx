'use client';

import styles from './LogoutButton.module.scss';
import Image from 'next/image';

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
        <Image alt="logout" src="/images/logout2.png" width={28} height={25} />
      </button>
    </form>
  );
}
