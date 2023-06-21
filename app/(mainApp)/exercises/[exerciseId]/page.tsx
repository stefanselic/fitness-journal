import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../../database/sessions';
import { notFound, redirect } from 'next/navigation';
import Image from 'next/image';
import { getExerciseById } from '../../../../database/exercises';
import styles from './page.module.scss';
// import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Exercise',
  description: 'Single exercise',
};

type Props = {
  params: {
    exerciseId: string;
  };
};

export default async function ExercisePage(props: Props) {
  const singleExercise = await getExerciseById(Number(props.params.exerciseId));
  if (!singleExercise) {
    notFound();
  }

  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect('/login?returnTo=/exercises');
  return (
    <main>
      <h1 className={styles.exerciseName}>
        {singleExercise.name.toUpperCase()}
      </h1>
      <h4 className={styles.exerciseMuscleType}>
        Muscle: {singleExercise.muscle}
      </h4>
      <div className={styles.exerciseImage}>
        <Image
          alt="exercise"
          src={`/images/${singleExercise.name}.png`}
          width={300}
          height={250}
        />
      </div>
      <div className={styles.instruction}>Instructions:</div>
      <div className={styles.exerciseInstruction}>
        <p>{singleExercise.instructions}</p>
      </div>
    </main>
  );
}
