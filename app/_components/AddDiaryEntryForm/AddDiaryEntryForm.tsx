'use client';

import { useState } from 'react';
import styles from './AddDiaryEntryForm.module.scss';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

const postSchema = z.object({
  exerciseSelection: z.string().min(1),
  exerciseReps1: z.string().min(1),
  exerciseWeight1: z.string().min(1),
  exerciseReps2: z.string().min(1),
  exerciseWeight2: z.string().min(1),
  exerciseReps3: z.string().min(1),
  exerciseWeight3: z.string().min(1),
  userId: z.number().min(1),
});

export default function AddDiaryEntryForm(props: {
  userId: any;
  setOpenCustom: (arg0: boolean) => void;
  exercisesList: any[];
}) {
  const [errors, setErrors] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      exerciseSelection: event.currentTarget.elements.exerciseSelect.value,
      exerciseReps1: event.currentTarget.elements.rep1.value,
      exerciseWeight1: event.currentTarget.elements.weight1.value,
      exerciseReps2: event.currentTarget.elements.rep2.value,
      exerciseWeight2: event.currentTarget.elements.weight2.value,
      exerciseReps3: event.currentTarget.elements.rep3.value,
      exerciseWeight3: event.currentTarget.elements.weight3.value,
      userId: props.userId,
    };

    const validationResult: any = postSchema.safeParse(formData);

    if (validationResult.success) {
      const formDataString = JSON.stringify(formData);

      await fetch('/api/diary', {
        method: 'POST',
        body: formDataString,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((data) => {
        if (data.status === 200) {
          props.setOpenCustom(false);
          router.refresh();
        }
      });
    } else {
      setErrors(validationResult.error.format());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onFocus={() => setErrors(null)}>
        <div>
          <label htmlFor="exercise_select">Select Exercise</label>
          <div>
            <select
              data-test-id="select-exercise"
              id="exercise_select"
              name="exerciseSelect"
              className={styles.selectBar}
            >
              {props.exercisesList.map((exercise) => (
                <option
                  data-test-id={`exercise-${exercise.id}`}
                  key={`exercise-${exercise.id}`}
                  value={exercise.id}
                >
                  {exercise.name.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formContainer}>
            <span className={styles.enumeratorContainer}>1.</span>
            <div>
              <label htmlFor="rep1">Reps:</label>
              <input
                data-test-id="exercise-rep1"
                type="number"
                min={1}
                name="rep1"
                id="rep1"
              />
            </div>
            <div>
              <label htmlFor="weight">Weight:</label>
              <div className={styles.inputGroup}>
                <input
                  data-test-id="exercise-weight1"
                  type="number"
                  min={1}
                  id="weight1"
                  name="weight1"
                />
                <span className={styles.weightLabelSpan}>kg</span>
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <span className={styles.enumeratorContainer}>2.</span>
            <div>
              <label htmlFor="rep2">Reps:</label>
              <input
                data-test-id="exercise-rep2"
                type="number"
                min={1}
                id="rep2"
                name="rep2"
              />
            </div>
            <div>
              <label htmlFor="weight2">Weight:</label>
              <div className={styles.inputGroup}>
                <input
                  data-test-id="exercise-weight2"
                  type="number"
                  min={1}
                  id="weight2"
                  name="weight2"
                />
                <span className={styles.weightLabelSpan}>kg</span>
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <span className={styles.enumeratorContainer}>3.</span>
            <div>
              <label htmlFor="rep3">Reps:</label>
              <input
                data-test-id="exercise-rep3"
                type="number"
                min={1}
                id="rep3"
                name="rep3"
              />
            </div>
            <div>
              <label htmlFor="weight3">Weight:</label>
              <div className={styles.inputGroup}>
                <input
                  data-test-id="exercise-weight3"
                  type="number"
                  min={1}
                  id="weight3"
                  name="weight3"
                />
                <span className={styles.weightLabelSpan}>kg</span>
              </div>
            </div>
          </div>
          <div>
            <button
              data-test-id="add-exercise-to-diary"
              className={styles.button}
            >
              Add to diary
            </button>
          </div>
          {errors !== null && (
            <p style={{ color: 'red' }}>Please fill out form*</p>
          )}
        </div>
      </form>
    </div>
  );
}
