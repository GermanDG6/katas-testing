import { wordWrap } from './word-wrap';
describe('The WordWrap', () => {
  it('makes every single line of text fit column width', () => {
    expect(wordWrap('', 5)).toBe('');
    expect(wordWrap('hello', 5)).toBe('hello');
    expect(wordWrap('longword', 4)).toBe('long\nword');
    expect(wordWrap('reallylongword', 4)).toBe('real\nlylo\nngwo\nrd');
    expect(wordWrap('abc def', 4)).toBe('abc\ndef');
    expect(wordWrap('abc def ghi', 4)).toBe('abc\ndef\nghi');
    expect(wordWrap(' abcdef', 4)).toBe('\nabcd\nef');
    expect(wordWrap(null, 4)).toBe('');
    expect(() => wordWrap('hello', -4)).toThrow(
      'A negative column width is not allowed'
    );
  });
});
