import styles from './LandingPageLayout.module.scss';

export default function LandingPageLayout({ children }) {
  return (
    <main className={styles.root}>
      <div className={styles.mainContainer}>{children}</div>
      <div className={styles.colorContainer} />
    </main>
  );
}
