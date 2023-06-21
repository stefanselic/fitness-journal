import { cache } from 'react';
// import { Product } from '../migrations/1685883592-createTableProducts';
import { sql } from './connect';

export type Exercise = {
  id: number;
  name: string;
  muscle: string;
  instructions: string;
};

export const getExercises = cache(async () => {
  const exercise = await sql<Exercise[]>`
    SELECT * FROM exercises
 `;
  return exercise;
});

export const getExerciseById = cache(async (id: number) => {
  const [exercise] = await sql<Exercise[]>`
    SELECT
      *
    FROM
      exercises
    WHERE
      id = ${id}
  `;
  return exercise;
});
