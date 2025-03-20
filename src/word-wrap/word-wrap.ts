export function wordWrap(text: string, columnWidth: number) {
  if (text.length <= columnWidth) return text;
  const wrapedText = text.substring(0, columnWidth);
  const unwrapedText = text.substring(columnWidth);
  return wrapedText + '\n' + wordWrap(unwrapedText, columnWidth);
}
