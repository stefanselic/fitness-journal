import { expect, test } from '@playwright/test';

test('login, add-exercise-to-diary, logout', async ({ page }) => {
  // Click on add-to-diary-button
  await page.getByTestId('add-to-diary-button').click();
  await expect(page).toHaveURL('http://localhost:3000/homepage');

  // Add reps for set1
  await page.getByTestId('exercise-rep1').click();
  await page.getByTestId('exercise-rep1').fill('12');

  // Add weight for set1
  await page.getByTestId('exercise-weight1').click();
  await page.getByTestId('exercise-weight1').fill('50');

  // Add reps for set2
  await page.getByTestId('exercise-rep2').click();
  await page.getByTestId('exercise-rep2').fill('10');

  // Add weight for set2
  await page.getByTestId('exercise-weight2').click();
  await page.getByTestId('exercise-weight2').fill('60');

  // Add reps for set3
  await page.getByTestId('exercise-rep3').click();
  await page.getByTestId('exercise-rep3').fill('10');

  // Add weight for set3
  await page.getByTestId('exercise-weight3').click();
  await page.getByTestId('exercise-weight3').fill('65');

  // Click on add-to-diary button
  await page.getByTestId('add-exercise-to-diary').click();

  // Click on search bar
  await page.getByTestId('search-bar').click();
  await expect(page).toHaveURL('http://localhost:3000/homepage');
});
