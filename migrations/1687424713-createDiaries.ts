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
