import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import { getExercises } from '../../../database/exercises';
import ExercisePage from './[exerciseId]/page';

export const metadata = {
  title: 'Exercises',
  description: 'All exercises',
};

export default async function ProductsPage() {
  const exercises = await getExercises();
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
      {/* <ExercisePage /> */}
    </>
  );
}
