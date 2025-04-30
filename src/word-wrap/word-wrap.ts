export function wordWrap(text: WrappeableText, columnWidth: ColumnWidth) {
  return wordWrapNoPrimitives(text, columnWidth).value();
}

function wordWrapNoPrimitives(
  text: WrappeableText,
  columnWidth: ColumnWidth
): WrappeableText {
  if (text.fitsIn(columnWidth)) return text;

  return text
    .wrappedText(columnWidth)
    .concat(
      wordWrapNoPrimitives(
        WrappeableText.create(text.unwrappedText(columnWidth).value()),
        columnWidth
      )
    );
}
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

  fitsIn(columnWidth: ColumnWidth) {
    return this.value().length <= columnWidth.value();
  }

  concat(text: WrappeableText) {
    return WrappeableText.create(this.value().concat(text.value()));
  }
  wrappedText(columnWidth: ColumnWidth) {
    return WrappeableText.create(
      this.value().substring(0, this.wrappedTextIndex(columnWidth)).concat('\n')
    );
  }

  unwrappedText(columnWidth: ColumnWidth) {
    return WrappeableText.create(
      this.value().substring(this.unwrappedTextIndex(columnWidth))
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

  value() {
    return this.text;
  }
}
