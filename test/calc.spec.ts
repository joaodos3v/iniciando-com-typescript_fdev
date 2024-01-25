import { sum } from '../src/calc';

test('should sum correctly', () => {
  expect(sum(12, 20)).toBe(32);
});
