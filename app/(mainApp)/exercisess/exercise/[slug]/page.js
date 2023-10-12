import Image from 'next/image';
import styles from './page.module.scss';

export default async function SingleExercise({ params }) {
  const exercise = await fetch(
    `https://api.api-ninjas.com/v1/exercises?name=${params.slug}`,
    {
      method: 'GET',
      headers: {
        'X-Api-Key': 'Fiy5RZxu2HF/hbu3My6p3A==TSdTBXwsxajuXfoi',
        'Content-Type': 'application/json',
      },
    },
  ).then((data) => data.json());

  return (
    <div className={styles.mainContainer}>
      <h1>{exercise[0].name}</h1>
      <p className={styles.exerciseMuscleType}>Muscle - {exercise[0].muscle}</p>

      <Image
        className={styles.exerciseImage}
        width={300}
        height={200}
        alt={exercise[0].name}
        src={`/images/${exercise[0].name}.png`}
      />

      <div className={styles.exerciseInstruction}>
        <p>{exercise[0].instructions}</p>
      </div>
    </div>
  );
}
