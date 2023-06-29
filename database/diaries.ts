import { cache } from 'react';
import { sql } from './connect';
import { Diary } from '../migrations/1687424713-createDiaries';

interface DiaryTransformed {
  id: number;
  date: Date;
  name: string | null;
}

interface Set {
  id: number;
  weight: number;
  reps: number;
  diaryId: number;
}

export interface DiaryWithSets extends DiaryTransformed {
  [x: string]: any;
  sets: Set[];
}

export const insertDiaryEntry = async (formData: any) => {
  const {
    exerciseSelection,
    exerciseReps1,
    exerciseWeight1,
    exerciseReps2,
    exerciseWeight2,
    exerciseReps3,
    exerciseWeight3,
    userId,
  } = formData;

  // Insert into diaries table
  const diaryInsertResult = await sql<{ id: number }[]>`
    INSERT INTO diaries (date, exercises_id, user_id)
    VALUES (CURRENT_DATE, ${Number(exerciseSelection)}, ${Number(userId)})
    RETURNING id
  `;

  const diaryId = diaryInsertResult[0]?.id;

  if (diaryId) {
    // Insert into sets table
    const setsInsertResult = await sql<
      {
        id: number;
        diaryId: number | null;
        weight: number | null;
        reps: number | null;
      }[]
    >`
    INSERT INTO sets (weight, reps, diary_id)
    VALUES
       (${Number(exerciseWeight1)}, ${Number(exerciseReps1)}, ${diaryId}),
      (${Number(exerciseWeight2)}, ${Number(exerciseReps2)}, ${diaryId}),
      (${Number(exerciseWeight3)}, ${Number(exerciseReps3)}, ${diaryId})
    RETURNING *
  `;

    return {
      diaryId,
      sets: setsInsertResult,
    };
  } else {
    throw new Error('Failed to insert diary entry');
  }
};

export const getDiaries = cache(async (userId: number, searchKey?: string) => {
  const diaries = await sql<
    { id: number; date: Date | null; name: string | null }[]
  >`
    SELECT diaries.id, diaries.date, exercises.name FROM diaries LEFT JOIN exercises ON exercises.id = diaries.exercises_id where diaries.user_id = ${userId} ${
    // eslint-disable-next-line @ts-safeql/check-sql
    searchKey ? sql`and name LIKE ${searchKey}` : sql``
  }
 `;

  const diaryIDs = diaries.map((diaryElement) => {
    return diaryElement.id;
  });

  const sets = await sql<{ weight: number; reps: number; diaryId: number }[]>`
      SELECT sets.weight, sets.reps, sets.diary_id FROM sets WHERE sets.diary_id = ANY(${diaryIDs})
   `;

  const setsByDiaryId: { [key: number]: Set[] } = sets.reduce(
    (acc: any, set) => {
      const { diaryId, ...rest } = set;
      acc[diaryId] = acc[diaryId] || [];
      acc[diaryId].push(rest);
      return acc;
    },
    {},
  );

  const data: DiaryWithSets[] = diaries.map((diary) => ({
    ...diary,
    sets: setsByDiaryId[diary.id] || [],
  }));

  return data;
});

export const deleteDiary = async (diaryId: number) => {
  // Delete from diaries table
  await sql`
    DELETE FROM
      diaries
    WHERE
      id = ${diaryId}
  `;
};
