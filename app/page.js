import Image from 'next/image';

import gymStats from '../public/images/fitness-stats.png';
import styles from './page.module.scss';
import LoginPageButton from './_components/LoginPageButton';
import RegisterPageButton from './_components/RegisterPageButton';

export default function LandingPage() {
  return (
    <main className={styles.mainContainer}>
      <div>
        <div className={styles.title}>
          <p>
            <i>Fit</i>
            <b>TRACK</b>
          </p>
        </div>
        <div>
          <p>It's not just a fitness app</p>
          <p>Personal your workout routine with the help of a trainer</p>
        </div>
        <div>
          <Image
            className={styles.image}
            src={gymStats}
            alt="man running illustration"
          />
        </div>
        <div className={styles.buttonContainer}>
          <RegisterPageButton />
          <LoginPageButton />
        </div>
      </div>
      <div className={styles.colorContainer} />
    </main>
  );
}
