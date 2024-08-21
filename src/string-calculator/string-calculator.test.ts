import { stringCalculator } from './string-calculator';

describe('String Calculator', () => {
  it('given a empty string or null should return 0', () => {
    const emptyString = '';
    const nullValue = null;

    expect(stringCalculator(emptyString)).toEqual(0);
    expect(stringCalculator(nullValue)).toEqual(0);
  });

  it('given only a number as a string should return the number', () => {
    const string = '2';

    expect(stringCalculator(string)).toEqual(2);
  });

  it('given numbers coma-separated, should return the sum', () => {
    const stringOfNumbers = '1,3,4,6';

    expect(stringCalculator(stringOfNumbers)).toEqual(14);
  });

  it('given a list of characters, only should sum the numbers', () => {
    const stringOfCharacters = '1,a,3,f,4,6,6s';

    expect(stringCalculator(stringOfCharacters)).toEqual(14);
  });

  it('given a configuration of separators, should accept personalised separators', () => {
    const stringWithSeparatorsConfiguration = '//-/1-3-4-6';

    expect(stringCalculator(stringWithSeparatorsConfiguration)).toEqual(14);
  });
});
