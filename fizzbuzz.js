function fizzbuzz(num) {
  if (num % 15 === 0) {
    return 'Fizzbuzz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  }
}

module.exports = fizzbuzz;
