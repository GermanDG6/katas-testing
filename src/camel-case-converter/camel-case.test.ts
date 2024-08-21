import { toCamelCase } from './camel-case';
describe('CamelCase', () => {
  it('Given a empty string should return a empty string ', () => {
    const result = toCamelCase('');
    const expected = '';

    expect(result).toBe(expected);
  });
  it('Given a word with the firt letter upper case should return the word with the first letter in uppercase', () => {
    const result = toCamelCase('Foo');
    const expected = 'Foo';

    expect(result).toBe(expected);
  });
  it('Given two word with the firt letter uppercase, separates by space,should return the two word with the first letter in uppercase joined', () => {
    const result = toCamelCase('Foo Buzz');
    const expected = 'FooBuzz';

    expect(result).toBe(expected);
  });
  it('Given two word with the firt letter uppercase, separates by guions,should return the two word with the first letter in uppercase joined', () => {
    const result = toCamelCase('Foo-Buzz_Bar');
    const expected = 'FooBuzzBar';

    expect(result).toBe(expected);
  });
  it('Given a word with the first letter in lowcase, return the same word in uppercase', () => {
    const result = toCamelCase('foo');
    const expected = 'Foo';

    expect(result).toBe(expected);
  });
  it('Given a text with words in lowcase should return the text in uppercase joined', () => {
    const result = toCamelCase('foo-bar Buzz');
    const expected = 'FooBarBuzz';
    expect(result).toBe(expected);
  });
});
