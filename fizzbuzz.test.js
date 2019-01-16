const fizzbuzz = require('./fizzbuzz');

test('returns fizz instead of 3', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});

test('returns buzz instead of 5', () => {
  expect(fizzbuzz(5)).toBe('Buzz');
});

test('returns Fizzbuzz instead of 15', () => {
  expect(fizzbuzz(15)).toBe('Fizzbuzz');
});

test('returns number if not a multiple of 3 or 5', () => {
  expect(fizzbuzz(4)).toBe(4);
});
