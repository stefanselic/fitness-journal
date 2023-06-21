import { Sql } from 'postgres';

export type Exercise = {
  id: number;
  name: string;
  muscle: string;
  instructions: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE exercises (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(50) NOT NULL,
      muscle varchar(50) NOT NULL,
      instructions varchar(1500) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE exercises
  `;
}
