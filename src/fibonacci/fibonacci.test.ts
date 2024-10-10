import { fibonacci } from './fibonacci';
describe('Fibonacci', () => {
  it('yields value 0 to number 0', () => {
    const number = 0;

    const result = fibonacci(number);

    expect(result).toBe(0);
  });

  it('yields value 1 to number 1', () => {
    const number = 1;

    const result = fibonacci(number);

    expect(result).toBe(1);
  });

  it.each([2, 3, 4, 5, 6, 89])(
    'is a sequence where the value for a number is the addition of the preceding two values',
    (n) => {
      expect(fibonacci(n)).toBe(fibonacci(n - 2) + fibonacci(n - 1));
    }
  );
});

/*

*/
