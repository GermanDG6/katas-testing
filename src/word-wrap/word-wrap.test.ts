import { ColumnWidth, wordWrap } from './word-wrap';
describe('The WordWrap', () => {
  it('makes every single line of text fit column width', () => {
    expect(wordWrap('', ColumnWidth.create(5))).toBe('');
    expect(wordWrap('hello', ColumnWidth.create(5))).toBe('hello');
    expect(wordWrap('longword', ColumnWidth.create(4))).toBe('long\nword');
    expect(wordWrap('reallylongword', ColumnWidth.create(4))).toBe(
      'real\nlylo\nngwo\nrd'
    );
    expect(wordWrap('abc def', ColumnWidth.create(4))).toBe('abc\ndef');
    expect(wordWrap('abc def ghi', ColumnWidth.create(4))).toBe(
      'abc\ndef\nghi'
    );
    expect(wordWrap(' abcdef', ColumnWidth.create(4))).toBe('\nabcd\nef');
    expect(wordWrap(null, ColumnWidth.create(4))).toBe('');
    expect(() => wordWrap('hello', ColumnWidth.create(-4))).toThrow(
      'A negative column width is not allowed'
    );
  });
});
