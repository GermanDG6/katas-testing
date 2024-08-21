export const fizzBuzz = (number: number) => {
  const isDivisibleBy = (divisor) => number % divisor === 0;
  if (isDivisibleBy(3) && isDivisibleBy(5)) return 'fizzBuzz';
  if (isDivisibleBy(3)) return 'fizz';
  if (isDivisibleBy(5)) return 'buzz';
  return String(number);
};
