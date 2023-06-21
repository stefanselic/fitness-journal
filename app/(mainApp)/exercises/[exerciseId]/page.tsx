import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../../database/sessions';
import { notFound, redirect } from 'next/navigation';
import Image from 'next/image';
import { getExerciseById } from '../../../../database/exercises';
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
  const singleExercise = await getExerciseById(Number(props.params.exerciseId)); // Convert the string into an number
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
      <h2>EXERCISE</h2>
      <Image
        alt="exercise"
        src={`/images/${singleExercise.name}.png`}
        width={200}
        height={150}
      />
      <div>
        <h1>{singleExercise.name}</h1>
        <p>Muscle: {singleExercise.muscle}</p>
        <p>Instructions: {singleExercise.instructions}</p>
      </div>
    </main>
  );
}
