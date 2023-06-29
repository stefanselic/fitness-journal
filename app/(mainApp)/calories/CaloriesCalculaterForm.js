'use client';

import React, { useState } from 'react';
import styles from './CaloriesCalculaterForm.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CalorieCalculator() {
  const [age, setAge] = useState();
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [activityLevel, setActivityLevel] = useState('');
  const [calorieNeeds, setCalorieNeeds] = useState(0);
  const router = useRouter();

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
  const calculateCalorieNeeds = () => {
    if (gender === 'male') {
      const bmr = 66 + 6.23 * weight + 12.7 * height - 6.8 * age;
      setCalorieNeeds(calculateAdjustedCalorieNeeds(bmr));
    } else if (gender === 'female') {
      const bmr = 655 + 4.35 * weight + 4.7 * height - 4.7 * age;
      setCalorieNeeds(calculateAdjustedCalorieNeeds(bmr));
    } else {
      setCalorieNeeds(0);
      console.log('Invalid gender input.');
    }
  };

  const isFormValid = () => {
    return (
      age > 0 &&
      gender !== '' &&
      weight > 0 &&
      height > 0 &&
      activityLevel !== ''
    );
  };

  return (
    <div className={styles.container}>
      <h2>Calorie Calculator</h2>
      <div>
        <Image
          className={styles.image}
          alt="tracking diet image"
          src={`/images/diet.png`}
          width={300}
          height={250}
        />
      </div>
      <div className={styles.containerAge}>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          min={1}
          value={age}
          onChange={(event) => setAge(Number(event.currentTarget.value))}
        />
      </div>
      <div className={styles.containerGender}>
        <label htmlFor="gender">Gender:</label>
        <select
          value={gender}
          onChange={(event) => setGender(event.currentTarget.value)}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className={styles.containerWeight}>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          min={1}
          value={weight}
          onChange={(event) => setWeight(Number(event.currentTarget.value))}
        />
      </div>
      <div className={styles.containerHeight}>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          min={1}
          value={height}
          onChange={(event) => setHeight(Number(event.currentTarget.value))}
        />
      </div>
      <div className={styles.containerActivity}>
        <label htmlFor="activity level">Activity Level:</label>
        <select
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
      {!isFormValid() ? (
        <button
          onClick={calculateCalorieNeeds}
          className={styles.containerButton}
        >
          Calculate
        </button>
      ) : (
        <p>Please fill out the form.</p>
      )}
      {calorieNeeds > 0 && (
        <p className={styles.message}>
          Estimated daily calorie needs: {calorieNeeds}kcal
        </p>
      )}
    </div>
  );
}
