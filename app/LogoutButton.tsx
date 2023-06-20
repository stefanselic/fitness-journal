'use client';

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
        Logout
      </button>
    </form>
  );
}
