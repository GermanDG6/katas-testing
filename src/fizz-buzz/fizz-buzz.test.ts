import { fizzBuzz } from './fizz-buzz';
describe('FizzBuzz', () => {
  it('Given number 1 should return 1 as string', () => {
    const result = fizzBuzz(1);
    const expected = '1';

    expect(result).toBe(expected);
  });
  it('Given number 3 should return "fizz', () => {
    const result = fizzBuzz(3);
    const expected = 'fizz';

    expect(result).toBe(expected);
  });
  it('Given number 5 should return "buzz', () => {
    const result = fizzBuzz(5);
    const expected = 'buzz';

    expect(result).toBe(expected);
  });
  it('Given number 15 should return "fizzBuzz', () => {
    const result = fizzBuzz(15);
    const expected = 'fizzBuzz';

    expect(result).toBe(expected);
  });
  it('Given a number multiple of 3 should return "fizz', () => {
    const result = fizzBuzz(6);
    const expected = 'fizz';

    expect(result).toBe(expected);
  });
  it('Given a number multiple of 5 should return "buzz', () => {
    const result = fizzBuzz(10);
    const expected = 'buzz';

    expect(result).toBe(expected);
  });
  it('Given a number multiple of 5 and 3 should return "fizzBuzz', () => {
    const result = fizzBuzz(30);
    const expected = 'fizzBuzz';

    expect(result).toBe(expected);
  });
});
