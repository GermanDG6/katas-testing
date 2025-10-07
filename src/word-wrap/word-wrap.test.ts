import { ColumnWidth, WrappeableText } from './word-wrap';
describe('The WordWrap', () => {
  it('makes every single line of text fit column width', () => {
    expect(WrappeableText.create('').wordWrap(ColumnWidth.create(5))).toEqual({
      text: '',
    });
    expect(
      WrappeableText.create('hello').wordWrap(ColumnWidth.create(5))
    ).toEqual({ text: 'hello' });
    expect(
      WrappeableText.create('longword').wordWrap(ColumnWidth.create(4))
    ).toEqual({ text: 'long\nword' });
    expect(
      WrappeableText.create('reallylongword').wordWrap(ColumnWidth.create(4))
    ).toEqual({ text: 'real\nlylo\nngwo\nrd' });
    expect(
      WrappeableText.create('abc def').wordWrap(ColumnWidth.create(4))
    ).toEqual({ text: 'abc\ndef' });
    expect(
      WrappeableText.create('abc def ghi').wordWrap(ColumnWidth.create(4))
    ).toEqual({ text: 'abc\ndef\nghi' });
    expect(
      WrappeableText.create(' abcdef').wordWrap(ColumnWidth.create(4))
    ).toEqual({ text: '\nabcd\nef' });
    expect(WrappeableText.create(null).wordWrap(ColumnWidth.create(4))).toEqual(
      { text: '' }
    );
    expect(() =>
      WrappeableText.create('hello').wordWrap(ColumnWidth.create(-4))
    ).toThrow('A negative column width is not allowed');
  });
});
