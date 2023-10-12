import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import { getExercises } from '../../../database/exercises';
import ExerciseList from './ExerciseList';
// import Exercises from '../../_components/Exercises/Exercises';

export const metadata = {
  title: 'Exercises',
  description: 'All exercises',
};

const muscles = [
  'calves',
  'forearms',
  'quadriceps',
  'abdominals',
  'glutes',
  'adductors',
];

async function getExercisesFromApi(muscle: string) {
  return await fetch(
    `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
    {
      method: 'GET',
      headers: {
        'X-Api-Key': 'Fiy5RZxu2HF/hbu3My6p3A==TSdTBXwsxajuXfoi',
        'Content-Type': 'application/json',
      },
    },
  );
}

export default async function ProductsPage() {
  // this comes from database
  const exercises = await getExercises();

  // this comes from api
  const res = await Promise.all(
    muscles.map((muscle) => {
      return getExercisesFromApi(muscle);
    }),
    // above is same as below:
    // getExercisesFromApi('calves'),
    // getExercisesFromApi('forearms');
  );
  const data = await Promise.all(
    res.map((r) => {
      return r.json();
    }),
  );

  return (
    <>
      <main className={styles.container}>
        {exercises.map((exercise) => {
          return (
            <div
              key={`product-div-${exercise.id}`}
              className={styles.exerciseContainer}
            >
              <div>
                <Link
                  href={`/exercises/${exercise.id}`}
                  className={styles.link}
                >
                  {exercise.name.toUpperCase()}
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.image}
                      alt={exercise.name}
                      src={`/images/${exercise.name}.png`}
                      fill
                    />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </main>
      <ExerciseList exercises={data.flat()} />
    </>
  );
}

['1', '2342', 'fsdf', 'sdfsf'];
