import { stringCalculator } from './string-calculator';
describe('String Calculator', () => {
  it('given a null  should return 0', () => {
    expect(stringCalculator(null)).toEqual(0);
  });
  it('given a empty string should return 0', () => {
    expect(stringCalculator('')).toEqual(0);
  });

  it('given a string number should return as a number', () => {
    expect(stringCalculator('8')).toEqual(8);
  });
  it('given several numbers separated by coma should return the sum of this numbers', () => {
    expect(stringCalculator('1,2,3')).toEqual(6);
  });
  it('the not numerical elements does not affect to the total', () => {
    expect(stringCalculator('1,2,3,ad,t,e')).toEqual(6);
  });
  it('allows custom separators', () => {
    expect(stringCalculator('//-1-2-3')).toEqual(6);
    expect(stringCalculator('//_1_2_3')).toEqual(6);
  });
});
