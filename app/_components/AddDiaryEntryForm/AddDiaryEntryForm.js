'use client';

import { useState } from 'react';
import styles from './AddDiaryEntryForm.module.scss';

export default function AddDiaryEntryForm(props) {
  const [exerciseSelection, setExerciseSelection] = useState(
    props.exercisesList[0].id,
  );
  const [exerciseReps1, setExerciseReps1] = useState();
  const [exerciseWeight1, setExerciseWeight1] = useState();
  const [exerciseReps2, setExerciseReps2] = useState();
  const [exerciseWeight2, setExerciseWeight2] = useState();
  const [exerciseReps3, setExerciseReps3] = useState();
  const [exerciseWeight3, setExerciseWeight3] = useState();

  return (
    <div>
      <form>
        <div>
          <label htmlFor="exercise_select">Select Exercise</label>
          <div>
            <select
              id="exercise_select"
              onChange={setExerciseSelection}
              className={styles.selectBar}
            >
              {props.exercisesList.map((exercise) => (
                <option key={exercise.id} value={exercise.id}>
                  {exercise.name.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formContainer}>
            <div>1.</div>
            <div>
              <label htmlFor="rep1">Reps:</label>
              <input
                type="number"
                id="rep1"
                value={exerciseReps1}
                onChange={(event) => {
                  setExerciseReps1(event.currentTarget.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="weight">Weight:</label>
              <input
                type="number"
                id="weight"
                value={exerciseWeight1}
                onChange={(event) => {
                  setExerciseWeight1(event.currentTarget.value);
                }}
              />
            </div>
            <span>kg</span>
          </div>
          <div className={styles.formContainer}>
            <div>2.</div>
            <div>
              <label htmlFor="rep2">Reps:</label>
              <input
                type="number"
                id="rep2"
                value={exerciseReps2}
                onChange={(event) => {
                  setExerciseReps2(event.currentTarget.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="weight">Weight:</label>
              <input
                type="number"
                id="weight"
                value={exerciseWeight2}
                onChange={(event) => {
                  setExerciseWeight2(event.currentTarget.value);
                }}
              />
            </div>
            <span>kg</span>
          </div>
          <div className={styles.formContainer}>
            <div>3.</div>
            <div>
              <label htmlFor="rep3">Reps:</label>
              <input
                type="number"
                id="rep3"
                value={exerciseReps3}
                onChange={(event) => {
                  setExerciseReps3(event.currentTarget.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="weight">Weight:</label>
              <input
                type="number"
                id="weight"
                value={exerciseWeight3}
                onChange={(event) => {
                  setExerciseWeight3(event.currentTarget.value);
                }}
              />
            </div>
            <span>kg</span>
          </div>
          <div>
            <button className={styles.button}>Add to diary</button>
          </div>
        </div>
      </form>
    </div>
  );
}

// const addExercise = async () => {
//   await fetch('/addDiary', {
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     method: 'POST',
//     body: JSON.stringify({
//       exerciseID: exerciseSelection,
//       exerciseSet1: exerciseSet1,
//     }),
//   });
// };
