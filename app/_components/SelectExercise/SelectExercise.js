'use client';

import { notFound } from 'next/navigation';
import { getExerciseById } from '../../../database/exercises';

export default async function SelectExercise(props) {
  const singleExercise = await getExerciseById(Number(props.params.exerciseId));
  if (!singleExercise) {
    notFound();
  }
  console.log('singleExercise:', singleExercise);

  return <div>{singleExercise.id}</div>;
}
