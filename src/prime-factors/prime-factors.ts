export function getPrimeFactorsFor(number: number) {
  checkforPositiveNumbers(number);
  return primeFactors(number);
}
function checkforPositiveNumbers(number: number) {
  if (number < 1) throw new Error('only allow positive numbers');
}

function primeFactors(number: number) {
  const prime = getSmallestPrime(number);
  const reminder = number / prime;
  if (reminder <= 1) return [prime];
  return [prime].concat(getPrimeFactorsFor(reminder));
}
function getSmallestPrime(number: number) {
  if (number == 1) return 1;
  let factor = 2;
  while (number % factor !== 0) ++factor;
  return factor;
}
