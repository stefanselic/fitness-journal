'use client';

import { useState } from 'react';

export default function AddDiaryEntryForm() {
  const [exerciseSelection, setExerciseSelection] = useState();
  const [exerciseSet1, setExersiceSet1] = useState();
  const [exerciseSet2, setExersiceSet2] = useState();
  const [exerciseSet3, setExersiceSet3] = useState();

  const addExercise = async () => {
    await fetch('/addDiary', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        exerciseID: exerciseSelection,
        exerciseSet1: exerciseSet1,
      }),
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="exercise_select">Select Exercise</label>
        <select id="exercise_select" onChange={setExerciseSelection}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <div>
          <label htmlFor="weight">Weight</label>
          <input type="number" id="weight" />
        </div>
        <div>
          <label htmlFor="set">Sets</label>
          <input type="number" id="set" />
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
