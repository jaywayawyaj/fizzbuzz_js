const fizzbuzz = require('./fizzbuzz');

test('returns fizz instead of 3', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});

test('returns buzz instead of 5', () => {
  expect(fizzbuzz(5)).toBe('Buzz');
});
