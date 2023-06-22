import { Sql } from 'postgres';

export type Diary = {
  id: number;
  user_id: number;
  exercises_id: number;
  date: number;
  sets: number;
  reps: number;
  weight: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE diaries (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_id integer REFERENCES users (id) ON DELETE CASCADE,
      exercises_id integer REFERENCES exercises (id) ON DELETE CASCADE,
      date date,
      sets integer,
      reps integer,
      weight integer
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE diaries
  `;
}
