export function wordWrap(text: string, columnWidth: ColumnWidth) {
  if (text == null) return '';
  if (text.length <= columnWidth.value()) return text;

  const wrappedTextIndex = getWrappedTextIndex(text, columnWidth.value());
  const unwrappedTextIndex = getUnwrappedTextIndex(text, columnWidth.value());

  const wrappedText = text.substring(0, wrappedTextIndex).concat('\n');
  const unwrappedText = text.substring(unwrappedTextIndex);

  return wrappedText.concat(wordWrap(unwrappedText, columnWidth));
}
function getUnwrappedTextIndex(text: string, columnWidth: number) {
  const shallWrapBySpace =
    text.indexOf(' ') > -1 && text.indexOf(' ') < columnWidth;
  return shallWrapBySpace ? text.indexOf(' ') + 1 : columnWidth;
}

function getWrappedTextIndex(text: string, columnWidth: number) {
  const shallWrapBySpace =
    text.indexOf(' ') > -1 && text.indexOf(' ') < columnWidth;
  return shallWrapBySpace ? text.indexOf(' ') : columnWidth;
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
