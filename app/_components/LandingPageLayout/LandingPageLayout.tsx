import styles from './LandingPageLayout.module.scss';

type LandingPageLayoutProps = {
  children: any,
};

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps) {
  return (
    <main className={styles.root}>
      <div className={styles.mainContainer}>{children}</div>
      <div className={styles.colorContainer} />
    </main>
  );
}
