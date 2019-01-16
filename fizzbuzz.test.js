const fizzbuzz = require('./fizzbuzz');

test('returns fizz instead of 3', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});
