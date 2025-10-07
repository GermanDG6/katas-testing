import { getPrimeFactors } from './prime-factors';

describe('Prime factors', () => {
  it('finds the prime composition of the given number', () => {
    expect(getPrimeFactors(2)).toEqual([2]);
    expect(getPrimeFactors(2 * 2)).toEqual([2, 2]);
    expect(getPrimeFactors(2 * 2 * 2)).toEqual([2, 2, 2]);
    expect(getPrimeFactors(3)).toEqual([3]);
    expect(getPrimeFactors(3 * 3)).toEqual([3, 3]);
    expect(getPrimeFactors(3 * 2)).toEqual([2, 3]);
    expect(getPrimeFactors(5 * 5)).toEqual([5, 5]);
    expect(getPrimeFactors(5 * 7 * 11 * 3)).toEqual([3, 5, 7, 11]);
  });
});
