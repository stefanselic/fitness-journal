import { expect, test } from '@jest/globals';
import { capitalizeFirstLetter } from '../capitalizeFirstLetter';

const testString = 'bench press';

test('capitalize the first letter', () => {
  const result = capitalizeFirstLetter(testString);
  expect(result).toBe('Bench press');
});
