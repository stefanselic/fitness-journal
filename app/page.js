import Image from 'next/image';

import gymStats from '../public/images/fitness-stats.png';
import styles from './page.module.scss';

export default function LandingPage() {
  return (
    <main className={styles.mainContainer}>
      <div>
        <div className={styles.title}>
          <p>Fitness Journal </p>
        </div>
        <div>
          <Image
            className={styles.image}
            src={gymStats}
            alt="man running illustration"
          />
        </div>
        <div>
          <p>Get Started Now </p>
        </div>
        <div className={styles.buttonContainer}>
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
      <div className={styles.colorContainer} />
    </main>
  );
}
