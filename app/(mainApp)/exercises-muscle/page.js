'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ExerciseList() {
  const muscles = ['abdominals', 'calves', 'forearms', 'glutes', 'lower_back'];

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
          const slicedExercises = result.slice(0, 3);
          results.push({ muscle, exercises: slicedExercises });
        }

        setExercises(results);
        console.log(results);
        const allExercises = results;
        console.log(allExercises);
      } catch (error) {
        console.error('Error: ', error);
      }
    }
    fetchExercises();
  }, []);

  return (
    <div>
      {/* <h1>EXERCISES</h1> */}
      {exercises.map((muscleExercises) => (
        <div key={muscleExercises.muscle}>
          <h2>Muscle: {muscleExercises.muscle}</h2>
          <ul>
            {muscleExercises.exercises.map((exercise) => (
              <>
                <Link href={`/exercises-muscle/${exercise.name}`}>
                  <li key={exercise.id}> {exercise.name}</li>
                </Link>
                {/* <li>Instructions: {exercise.instructions}</li> */}
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
