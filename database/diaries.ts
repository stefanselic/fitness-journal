import { cache } from 'react';
import { sql } from './connect';
import { Diary } from '../migrations/1687424713-createDiaries';

// export type Diary = {
//   id: number;
//   user_id: number;
//   exercises_id: number;
//   date: number;
//   sets: number;
//   reps: number;
//   weight: number;
// };

export const getDiaries = cache(async () => {
  const diary = await sql<Diary[]>`
    SELECT * FROM diaries
 `;
  return diary;
});

export const getDiaryById = cache(async (id: number) => {
  const [diary] = await sql<Diary[]>`
    SELECT
      *
    FROM
      diaries
    WHERE
      id = ${id}
  `;
  return diary;
});

export const createDiary = cache(
  async (
    userId: number,
    exercisesId: number,
    date: Date,
    sets: number,
    reps: number,
    weight: number,
  ) => {
    const [diary] = await sql<Diary[]>`
    INSERT INTO diaries
      (user_id, exercises_id, date, sets, reps, weight)
    VALUES
      (${userId}, ${exercisesId}, ${date}, ${sets}, ${reps}, ${weight})
    RETURNING
      user_id,
      exercises_id,
      date,
      sets,
      reps
 `;

    return diary;
  },
);
