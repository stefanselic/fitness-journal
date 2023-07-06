import { expect, test } from '@jest/globals';
import { calculateCalorieNeeds } from '../calculateCalories';

const weight1 = 70; // in kilograms
const height1 = 170; // in centimeters
const age1 = 30; // in years
const gender1 = 'male';
const acitivityLevel1 = 1.2; // sedentary activity level

const weight2 = 60; // in kilograms
const height2 = 170; // in centimeters
const age2 = 35; // in years
const gender2 = 'female';
const acitivityLevel2 = 1.45; // moderately active activity level

test('calculate the calorie need per day for man', () => {
  const result = calculateCalorieNeeds(
    weight1,
    height1,
    age1,
    gender1,
    acitivityLevel1,
  );
  expect(result).toBe(1941);
});

test('calculate the calorie need per day for woman', () => {
  const result = calculateCalorieNeeds(
    weight2,
    height2,
    age2,
    gender2,
    acitivityLevel2,
  );
  expect(result).toBe(1923.425);
});
