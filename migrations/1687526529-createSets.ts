import { Sql } from 'postgres';

export type Set = {
  id: number;
  weight: number;
  reps: number;
  diary_id: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE sets (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      diary_id integer REFERENCES diaries (id) ON DELETE CASCADE,
      weight integer,
      reps integer
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE sets
  `;
}
