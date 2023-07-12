import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../../database/sessions';
import { notFound, redirect } from 'next/navigation';
import Image from 'next/image';
import { getExerciseById } from '../../../../database/exercises';
import styles from './page.module.scss';

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

function transformString(searchString) {
  const regex = /\d+\.(.*?)(?=\d+\.|$)/gs;
  const matches = searchString.matchAll(regex);
  const result = [];

  for (const match of matches) {
    result.push(match[1].trim());
  }

  return result;
}

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

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const transformedStringArray = transformString(singleExercise.instructions);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.secondContainer}>
        <h1>{singleExercise.name.toUpperCase()}</h1>
        <div className={styles.exerciseMuscleType}>
          <span>Muscle</span>
          <span>
            <b>{capitalizeFirstLetter(singleExercise.muscle)}</b>
          </span>
        </div>
        <div>
          <Image
            className={styles.exerciseImage}
            alt="exercise"
            src={`/images/${singleExercise.name}.png`}
            width={300}
            height={250}
          />
        </div>
        <div className={styles.exerciseInstruction}>
          <h3>Instructions:</h3>
          <ol>
            {transformedStringArray.map((instructionStep, index) => (
              <li key={index}>{instructionStep}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
