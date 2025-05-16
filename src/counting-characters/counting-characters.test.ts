import { CharactersCounter } from './counting-characters';
describe('The characters counter', () => {
  it('should return a empty object for a empty string', () => {
    const emptyString = '';

    const result = CharactersCounter.count(emptyString);

    expect(result).toEqual({});
  });
  it('should return a empty object for null', () => {
    const emptyString = null;

    const result = CharactersCounter.count(emptyString);

    expect(result).toEqual({});
  });

  it('for a string of one character should return a object with the character as key and value equal to 1', () => {
    const oneCharacterString = 'a';

    const result = CharactersCounter.count(oneCharacterString);

    expect(result).toEqual({ a: 1 });
  });

  it('for a string of one character repited should return a object with the character as key and value equal to the number of repited characters', () => {
    const oneCharacterRepitedString = 'aaa';

    const result = CharactersCounter.count(oneCharacterRepitedString);

    expect(result).toEqual({ a: 3 });
  });

  it('for a string of several characters repited should return a object with the characters as key and value equal to the number of the equal characters', () => {
    const severalCharactersString = 'aab';

    const result = CharactersCounter.count(severalCharactersString);

    expect(result).toEqual({ a: 2, b: 1 });
  });

  it('for a string of several characters including spaces and punctuation marks', () => {
    const stringWithSpacesAndPunctuationMarks = 'a !,';

    const result = CharactersCounter.count(stringWithSpacesAndPunctuationMarks);

    expect(result).toEqual({ a: 1, ' ': 1, '!': 1, ',': 1 });
  });
});
