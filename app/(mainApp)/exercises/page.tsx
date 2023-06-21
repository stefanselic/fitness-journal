import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import { getExercises } from '../../../database/exercises';

export const metadata = {
  title: 'Exercises',
  description: 'All exercises',
};

export default async function ProductsPage() {
  const exercises = await getExercises();
  return (
    <>
      <div className={styles.header}>
        <h1>EXERCISES</h1>
      </div>
      <main className={styles.container}>
        {exercises.map((exercise) => {
          return (
            <div
              key={`product-div-${exercise.id}`}
              className={styles.productContainer}
            >
              <div>
                <Link
                  href={`/exercises/${exercise.id}`}
                  className={styles.link}
                >
                  {exercise.name.toUpperCase()}
                  <div>
                    <Image
                      alt={exercise.name}
                      src={`/images/${exercise.name}.png`}
                      width={250}
                      height={200}
                    />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
