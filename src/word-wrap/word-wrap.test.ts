import { wordWrap } from './word-wrap';
describe('The WordWrap', () => {
  it('makes every single line of text fit column width', () => {
    expect(wordWrap('', 5)).toBe('');
    expect(wordWrap('hello', 5)).toBe('hello');
    expect(wordWrap('longword', 4)).toBe('long\nword');
    expect(wordWrap('reallylongword', 4)).toBe('real\nlylo\nngwo\nrd');
    expect(wordWrap('abc def', 4)).toBe('abc\ndef');
  });
});
