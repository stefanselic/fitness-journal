import React from 'react';
import Image from 'next/image';
import DeleteButton from '../DeleteButton/DeleteButton';
import styles from './DiaryEntry.module.scss';

export default function DiaryEntry({ diary }: any) {
  return (
    <div key={`diary ${diary.id}`} className={styles.exerciseContainer}>
      <div>
        <Image
          className={styles.exerciseImage}
          alt="exercise"
          src={`/images/${diary.name}.png`}
          width={200}
          height={150}
        />
      </div>
      <div>
        <div className={styles.exerciseName}>{diary.name?.toUpperCase()}</div>
        <ol>
          {diary.sets.map(
            (set: { reps: number; weight: number }, index: number) => (
              <li key={`dairy-set ${index.toFixed}`}>
                <span className={styles.exerciseSets}>Set</span>
                <span className={styles.exerciseReps}>{set.reps}reps</span>
                <span>{set.weight}kg</span>
              </li>
            ),
          )}
        </ol>
        <div>
          <DeleteButton diaryId={diary.id} />
        </div>
      </div>
    </div>
  );
}
