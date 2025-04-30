import { ColumnWidth, wordWrap, WrappeableText } from './word-wrap';
describe('The WordWrap', () => {
  it('makes every single line of text fit column width', () => {
    expect(wordWrap(WrappeableText.create(''), ColumnWidth.create(5))).toBe('');
    expect(
      wordWrap(WrappeableText.create('hello'), ColumnWidth.create(5))
    ).toBe('hello');
    expect(
      wordWrap(WrappeableText.create('longword'), ColumnWidth.create(4))
    ).toBe('long\nword');
    expect(
      wordWrap(WrappeableText.create('reallylongword'), ColumnWidth.create(4))
    ).toBe('real\nlylo\nngwo\nrd');
    expect(
      wordWrap(WrappeableText.create('abc def'), ColumnWidth.create(4))
    ).toBe('abc\ndef');
    expect(
      wordWrap(WrappeableText.create('abc def ghi'), ColumnWidth.create(4))
    ).toBe('abc\ndef\nghi');
    expect(
      wordWrap(WrappeableText.create(' abcdef'), ColumnWidth.create(4))
    ).toBe('\nabcd\nef');
    expect(wordWrap(WrappeableText.create(null), ColumnWidth.create(4))).toBe(
      ''
    );
    expect(() =>
      wordWrap(WrappeableText.create('hello'), ColumnWidth.create(-4))
    ).toThrow('A negative column width is not allowed');
  });
});
