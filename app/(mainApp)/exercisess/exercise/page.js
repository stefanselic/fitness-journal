'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../exercise/page.module.scss';
import { capitalizeFirstLetter } from '../../../../util/capitalizeFirstLetter';

export default function ExerciseList(props) {
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
    <div className={styles.mainContainer}>
      {exercises.map((muscleExercises) => (
        <div key={muscleExercises.muscle}>
          {muscleExercises.exercises.map((exercise) => (
            <>
              <div className={styles.secondContainer}>
                <h1 key={exercise.id}> {exercise.name}</h1>
                <div className={styles.exerciseMuscleType}>
                  <span>Muscle:</span>
                  <span>{capitalizeFirstLetter(exercise.muscle)}</span>
                </div>
                <div>
                  <img
                    src={`/images/${exercise.name}.png`}
                    className={styles.exerciseImage}
                  ></img>
                </div>
                <div className={styles.exerciseInstruction}>
                  <h3>Instructions:</h3>
                  {exercise.instructions}
                </div>
              </div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
}
