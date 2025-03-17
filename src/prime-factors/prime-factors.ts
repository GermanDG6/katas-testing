export function getPrimeFactorsFor(number: number) {
  const prime = getSmallestPrime(number);
  const reminder = number / prime;
  if (reminder <= 1) return [prime];
  return [prime].concat(getPrimeFactorsFor(reminder));
}
function getSmallestPrime(number: number) {
  let factor = 2;
  while (number % factor !== 0) ++factor;
  return factor;
}
