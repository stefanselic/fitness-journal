import Link from 'next/link';
import styles from './ExerciseList.module.scss';

export default function ExerciseList(props) {
  return (
    <div className={styles.container}>
      {/* {props.exercises.map((muscleExercises) => (
        <div key={muscleExercises.muscle}> */}
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <div className={styles.exerciseContainer}>
            <Link
              href={`/exercisess/exercise/${exercise.name}`}
              className={styles.link}
            >
              <div key={exercise.id}> {exercise.name}</div>
              <div className={styles.imageContainer}>
                <img
                  alt="Exercise"
                  src={`/images/${exercise.name}.png`}
                  className={styles.image}
                />
              </div>
            </Link>
          </div>
        </div>
      ))}
      {/* </div>
      ))} */}
    </div>
  );
}
