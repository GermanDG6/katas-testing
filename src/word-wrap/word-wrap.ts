export class ColumnWidth {
  private constructor(private readonly width: number) {}
  static create(width: number) {
    if (width < 0) throw new Error('A negative column width is not allowed');
    return new ColumnWidth(width);
  }
  value() {
    return this.width;
  }
}
export class WrappeableText {
  private constructor(private readonly text: string) {}

  static create(text: string) {
    if (text == null) return new WrappeableText('');
    return new WrappeableText(text);
  }

  wordWrap(columnWidth: ColumnWidth): WrappeableText {
    if (this.fitsIn(columnWidth)) return WrappeableText.create(this.text);

    return this.wrappedText(columnWidth).concat(
      this.unwrappedText(columnWidth).wordWrap(columnWidth)
    );
  }

  private fitsIn(columnWidth: ColumnWidth) {
    return this.text.length <= columnWidth.value();
  }

  private concat(text: WrappeableText) {
    return WrappeableText.create(this.text.concat(text.text));
  }
  private wrappedText(columnWidth: ColumnWidth) {
    return WrappeableText.create(
      this.text.substring(0, this.wrappedTextIndex(columnWidth)).concat('\n')
    );
  }

  private unwrappedText(columnWidth: ColumnWidth) {
    return WrappeableText.create(
      this.text.substring(this.unwrappedTextIndex(columnWidth))
    );
  }
  private unwrappedTextIndex(columnWidth: ColumnWidth) {
    return this.shallWrapBySpace(columnWidth)
      ? this.text.indexOf(' ') + 1
      : columnWidth.value();
  }

  private wrappedTextIndex(columnWidth: ColumnWidth) {
    return this.shallWrapBySpace(columnWidth)
      ? this.text.indexOf(' ')
      : columnWidth.value();
  }

  private shallWrapBySpace(columnWidth: ColumnWidth) {
    return (
      this.text.indexOf(' ') > -1 &&
      this.text.indexOf(' ') < columnWidth.value()
    );
  }
}
