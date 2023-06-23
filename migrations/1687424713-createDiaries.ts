import { Sql } from 'postgres';

export type Diary = {
  id: number;
  userId: number;
  exercisesId: number;
  date: Date;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE diaries (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_id integer REFERENCES users (id) ON DELETE CASCADE,
      exercises_id integer REFERENCES exercises (id) ON DELETE CASCADE,
      date date
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE diaries
  `;
}

const data = [
  {
    id: 1,
    date: '2023-06 - 23T00:00:00.000Z',
    name: 'bench press',
    sets: [
      { weight: 50, reps: 5, diaryId: 1 },
      { weight: 50, reps: 5, diaryId: 1 },
      { weight: 50, reps: 10, diaryId: 1 },
    ],
  },
  {
    id: 2,
    date: '2023-06-23T00:00:00.000Z',
    name: 'positive bench press',
    sets: [{ weight: 10, reps: 12, diaryId: 2 }],
  },
];
