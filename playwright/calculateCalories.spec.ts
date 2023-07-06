// import { expect, test } from '@playwright/test';

// test('calculate-calories', async ({ page }) => {
//   // Open webpage
//   await page.goto('http://localhost:3000/calories');
//   await expect(page).toHaveURL('http://localhost:3000/calories');

//   // Add age
//   await page.getByTestId('calories-input-age').click();
//   await page.getByTestId('calories-input-age').fill('28');

//   // Select gender
//   await page.getByTestId('calories-select').selectOption('male');

//   // Add weight
//   await page.getByTestId('calories-input-weight').click();
//   await page.getByTestId('calories-input-weight').fill('82');
//   // await expect(
//   //   page.getByTestId('calories-input-weight').getByText('82'),
//   // ).toBeVisible();

//   // Add height
//   await page.getByTestId('calories-input-height').click();
//   await page.getByTestId('calories-input-height').fill('172');

//   // Select activity level
//   await page
//     .getByTestId('calories-select-activity-level')
//     .selectOption('sedentary');

//   // Calculate calories
//   await page.getByTestId('calculate-calories-button').click();
// });
