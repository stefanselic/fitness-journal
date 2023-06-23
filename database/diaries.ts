import { cache } from 'react';
import { sql } from './connect';

interface DiaryTransformed {
  id: number;
  date: Date;
  name: string | null;
}

interface Set {
  weight: number;
  reps: number;
  diaryId: number;
}

interface DiaryWithSets extends DiaryTransformed {
  sets: Set[];
}
export const getDiaries = cache(async () => {
  const diaries = await sql<{ id: number; date: Date; name: string | null }[]>`
    SELECT diaries.id, diaries.date, exercises.name FROM diaries
      LEFT JOIN exercises ON exercises.id = diaries.id
 `;

  const diaryIDs = diaries.map((diaryElement) => {
    return diaryElement.id;
  });

  const sets = await sql<{ weight: number; reps: number; diaryId: number }[]>`
      SELECT sets.weight, sets.reps, sets.diary_id FROM sets WHERE sets.diary_id = ANY(${diaryIDs})
   `;

  // This is bad (can be too slow)
  // const data = diaries.map((diary) => {
  //   const matchingSets = sets.filter((set) => set.diaryId === diary.id);
  //   return { ...diary, sets: matchingSets };
  // });

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
