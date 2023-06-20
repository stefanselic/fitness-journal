import Image from 'next/image';

import gymStats from '../public/images/fitness-stats.png';
import styles from './page.module.scss';
import LoginPageButton from './_components/LoginPageButton';
import RegisterPageButton from './_components/RegisterPageButton';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getUserBySessionToken } from '../database/users';
import LandingPageLayout from './_components/LandingPageLayout/LandingPageLayout';

export default async function LandingPage() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  if (user) {
    redirect('/homepage');
  }

  return (
    <LandingPageLayout>
      <div className={styles.mainContainer}>
        <div className={styles.title}>
          <p>
            <i>Fit</i>
            <b>TRACK</b>
          </p>
        </div>
        <div className={styles.firstParagraph}>
          <p>It's not just a fitness app</p>
        </div>
        <div className={styles.secondParagraph}>
          <span>Personalize your workout routine with the</span>
          <span>help of a trainer</span>
        </div>
        <div className={styles.imageContainer}>
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
    </LandingPageLayout>
  );
}
