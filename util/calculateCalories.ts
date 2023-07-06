export function calculateCalorieNeeds(
  weight: number,
  height: number,
  age: number,
  gender: string,
  activityLevel: number,
) {
  // Calorie need male
  const bmr1 = 10 * weight + 6.25 * height - 5 * age + 5;

  // Calorie need female
  const bmr2 = 10 * weight + 6.25 * height - 5 * age - 161;

  if (gender === 'male') {
    return bmr1 * activityLevel;
  } else if (gender === 'female') {
    return bmr2 * activityLevel;
  } else {
    throw new Error('Invalid gender provided.');
  }
}
