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

test('returns fizz instead of multiples of 3', () => {
  expect(fizzbuzz(9)).toBe('Fizz');
});

test('returns fizz instead of multiples of 123', () => {
  expect(fizzbuzz(123)).toBe('Fizz');
});

test('returns buzz instead of multiples of 55', () => {
  expect(fizzbuzz(55)).toBe('Buzz');
});

test('returns buzz instead of multiples of 1370', () => {
  expect(fizzbuzz(1370)).toBe('Buzz');
});

test('returns Fizzbuzz instead of 60', () => {
  expect(fizzbuzz(60)).toBe('Fizzbuzz');
});

test('returns Fizzbuzz instead of 135', () => {
  expect(fizzbuzz(135)).toBe('Fizzbuzz');
});
