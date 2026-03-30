import { MarkdownTransformer } from './markdown-transformer';

describe('Markdown Transformer', () => {
  it('does not trasnform a given markdown text that does not contain any links', () => {
    const simpleText = 'This is a simple text';

    const transformedText = new MarkdownTransformer(simpleText).transform();

    expect(transformedText).toEqual(simpleText);
  });
  it('transform a given markdown text that contains one link', () => {
    const markdownText = '[this book](https://thisbook.com)';

    const transformedText = new MarkdownTransformer(markdownText).transform();

    expect(transformedText).toEqual('this book [^anchor1]\n\n[^anchor1]: https://thisbook.com');
  });
  it('transform a given markdown text that contains multiple links', () => {
    const markdownText = '[this book](https://thisbook.com) [other link](other url)';

    const transformedText = new MarkdownTransformer(markdownText).transform();

    expect(transformedText).toEqual('this book [^anchor1] other link [^anchor2]\n\n[^anchor1]: https://thisbook.com\n\n[^anchor2]: other url');
  });
  it('transform a given markdown text that contains multiple links and extra content ', () => {
    const markdownText = '[this book](https://thisbook.com) with extra content [other link](other url) and more content';

    const transformedText = new MarkdownTransformer(markdownText).transform();

    expect(transformedText).toEqual('this book [^anchor1] with extra content other link [^anchor2] and more content\n\n[^anchor1]: https://thisbook.com\n\n[^anchor2]: other url');
  });
  it('transform a given markdown text that contains multiple links avoiding duplication', () => {
    const markdownText =
      '[this book](https://thisbook.com) [other link](other url)[other link](other url)';

    const transformedText = new MarkdownTransformer(markdownText).transform();

    expect(transformedText).toEqual(
      'this book [^anchor1] other link [^anchor2]other link [^anchor2]\n\n[^anchor1]: https://thisbook.com\n\n[^anchor2]: other url'
    );
  });
});
