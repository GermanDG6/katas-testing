export function wordWrap(text: string, columnWidth: number) {
  if (columnWidth < 0)
    throw new Error('A negative column width is not allowed');
  if (text == null) return '';
  if (text.length <= columnWidth) return text;

  const wrappedTextIndex = getWrappedTextIndex(text, columnWidth);
  const unwrappedTextIndex = getUnwrappedTextIndex(text, columnWidth);

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
