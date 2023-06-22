'use client';

import Image from 'next/image';
import { useState } from 'react';

export default async function AddDiaryEntryForm(props) {
  const [exerciseSelection, setExerciseSelection] = useState();
  const [exerciseSet1, setExersiceSet1] = useState();
  const [exerciseSet2, setExersiceSet2] = useState();
  const [exerciseSet3, setExersiceSet3] = useState();

  console.log('This are my exercises:', props);
  // console.log('This are my exercises:', setExerciseSelection);
  return (
    <div>
      <div>
        <label htmlFor="exercise_select">Select Exercise</label>
        <select id="exercise_select" onChange={setExerciseSelection}>
          {props.exercisesList.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>
              {exercise.name}
              {/* <img src={`images/${exercise.name}.png`} alt={exercise.name} /> */}
            </option>
          ))}
        </select>
        <div>
          <label htmlFor="weight">Weight</label>
          <input type="number" id="weight" />
        </div>
        <div>
          <label htmlFor="set">Sets</label>
          <input type="number" id="set" />
        </div>
        <div>
          <button>Submit</button>
        </div>
        {/* <div>
          <p>Set 1</p>
          <div>
            <label htmlFor="Weight_1">Weight 1</label>
            <input id="Weight_1" />
          </div>
        </div>
        <div>
          <p>Set 2</p>
          <div>
            <label htmlFor="Weight_2">Weight</label>
            <input id="Weight_2" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
