'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../Exercises/Exercises.module.scss';
// import SingleExercise from './SingleExercise';

export default function ExerciseList() {
  const muscles = [
    'calves',
    'forearms',
    'quadriceps',
    'abdominals',
    'glutes',
    'adductors',
  ];

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const results = [];

        for (const muscle of muscles) {
          const response = await fetch(
            `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
            {
              method: 'GET',
              headers: {
                'X-Api-Key': 'Fiy5RZxu2HF/hbu3My6p3A==TSdTBXwsxajuXfoi',
                'Content-Type': 'application/json',
              },
            },
          );

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const result = await response.json();
          // Slice the result to include only the first 3 exercises
          const slicedExercises = result.slice(0, 1);
          results.push({ muscle, exercises: slicedExercises });
        }

        setExercises(results);
      } catch (error) {
        console.error('Error: ', error);
      }
    }

    fetchExercises();
  }, []);

  return (
    <div className={styles.container}>
      {exercises.map((muscleExercises) => (
        <div key={muscleExercises.muscle}>
          {muscleExercises.exercises.map((exercise) => (
            <>
              <div className={styles.exerciseContainer}>
                <Link
                  href={`/exercise/${exercise.name}`}
                  className={styles.link}
                >
                  <div key={exercise.id}> {exercise.name}</div>
                  <div className={styles.imageContainer}>
                    <img
                      src={`/images/${exercise.name}.png`}
                      className={styles.image}
                    ></img>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
}

{
  /* <div>
  <Link href={`/exercises/${exercise.id}`} className={styles.link}>
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
</div>; */
}
