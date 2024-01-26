import { dangerMultiply, greeting, multiply } from '../../src/types/functions';

test('should return a customized greeting', () => {
  expect(greeting('João')).toBe('Olá, João! Passar bem!');
});

test('should multiply two numbers', () => {
  const result = multiply(4, 5);
  expect(result).toBe(20);
});

test('should return NaN with string parameter', () => {
  const result = dangerMultiply('a', 5);
  expect(result).toBeNaN();
});
