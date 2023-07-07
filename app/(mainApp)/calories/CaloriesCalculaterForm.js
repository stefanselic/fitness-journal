'use client';

import React, { useState } from 'react';
import styles from './CaloriesCalculaterForm.module.scss';
import Image from 'next/image';

export default function CalorieCalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [calorieNeeds, setCalorieNeeds] = useState(0);
  const [showFormError, setShowFormError] = useState(false);

  const calculateAdjustedCalorieNeeds = (bmr) => {
    const activityFactors = {
      sedentary: 1.2,
      'lightly active': 1.275,
      'moderately active': 1.45,
      'very active': 1.625,
      'extra active': 1.8,
    };

    if (activityLevel.toLowerCase() in activityFactors) {
      return Math.round(bmr * activityFactors[activityLevel.toLowerCase()]);
    } else {
      console.log('Invalid activity level input.');
      return 0;
    }
  };
  const isFormValid = () => {
    return (
      age !== '' &&
      gender !== '' &&
      weight !== '' &&
      height !== '' &&
      activityLevel !== ''
    );
  };

  const calculateCalorieNeeds = () => {
    if (isFormValid()) {
      if (gender === 'male') {
        const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        setCalorieNeeds(calculateAdjustedCalorieNeeds(bmr));
      } else if (gender === 'female') {
        const bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        setCalorieNeeds(calculateAdjustedCalorieNeeds(bmr));
      } else {
        setCalorieNeeds(0);
        console.log('Invalid gender input.');
      }
      setShowFormError(false);
    } else {
      setShowFormError(true);
    }
  };
  return (
    <div className={styles.container}>
      <h2>Calorie Calculator</h2>

      {calorieNeeds > 0 && (
        <p className={styles.message}>
          Calorie needs: <b>{calorieNeeds}kcal</b>
        </p>
      )}
      <div>
        <Image
          alt="tracking diet image"
          src="/images/diet.png"
          width={230}
          height={180}
        />
      </div>
      <div className={styles.containerAge}>
        <label htmlFor="age">Age:</label>
        <input
          data-test-id="calories-input-age"
          type="number"
          min={1}
          value={age}
          onChange={(event) =>
            setAge(
              event.currentTarget.value !== ''
                ? Number(event.currentTarget.value)
                : '',
            )
          }
        />
      </div>
      <div className={styles.containerGender}>
        <label htmlFor="gender">Gender:</label>
        <select
          data-test-id="calories-select"
          value={gender}
          onChange={(event) => setGender(event.currentTarget.value)}
        >
          <option data-test-id="calories-select-male" value="">
            Select
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className={styles.containerWeight}>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          data-test-id="calories-input-weight"
          type="number"
          min={1}
          value={weight}
          onChange={(event) =>
            setWeight(
              event.currentTarget.value !== ''
                ? Number(event.currentTarget.value)
                : '',
            )
          }
        />
      </div>
      <div className={styles.containerHeight}>
        <label htmlFor="height">Height (cm):</label>
        <input
          data-test-id="calories-input-height"
          type="number"
          min={1}
          value={height}
          onChange={(event) =>
            setHeight(
              event.currentTarget.value !== ''
                ? Number(event.currentTarget.value)
                : '',
            )
          }
        />
      </div>
      <div className={styles.containerActivity}>
        <label htmlFor="activity level">Activity Level:</label>
        <select
          data-test-id="calories-select-activity-level"
          value={activityLevel}
          onChange={(event) => setActivityLevel(event.currentTarget.value)}
        >
          <option value="">Select</option>
          <option value="sedentary">Sedentary</option>
          <option value="lightly active">Lightly Active</option>
          <option value="moderately active">Moderately Active</option>
          <option value="very active">Very Active</option>
          <option value="extra active">Extra Active</option>
        </select>
      </div>
      {showFormError && <p>Please fill out the form.</p>}

      <button
        data-test-id="calculate-calories-button"
        onClick={calculateCalorieNeeds}
        className={styles.containerButton}
        disabled={!isFormValid()}
      >
        Calculate
      </button>
    </div>
  );
}
