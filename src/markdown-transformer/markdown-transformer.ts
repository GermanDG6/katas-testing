export class MarkdownTransformer {
  constructor(readonly markdownText: string) {}

  transform() {
    const links = this.findAllLinks();
    const linksRecord = this.generatesLinksRecord(links);
    const transformedMarkdown = this.replaceLinksByAnchors(linksRecord);
    const footnotes = this.generateFootnotes(linksRecord);

    return this.appendsFootnotesToMarkdown(transformedMarkdown, footnotes);
  }

  findAllLinks(): MarkdownLink[] {
    const linkRegex = /\[([^\]]+)\]\(([^\)]+)\)/g;
    const matches = Array.from(this.markdownText.matchAll(linkRegex));

    const links = matches.map((match) => new MarkdownLink(match[1], match[2]));

    return this.uniqueLinks(links);
  }

  private uniqueLinks(links: MarkdownLink[]) {
    return links.filter(
      (link, index) => links.findIndex((l) => l.toEqual(link)) === index
    );
  }

  private generatesLinksRecord(
    markdownLinks: MarkdownLink[]
  ): Record<string, MarkdownLink> {
    return markdownLinks.reduce(
      (acc, current, index) => ({
        ...acc,
        [`[^anchor${index + 1}]`]: current,
      }),
      {} as Record<string, MarkdownLink>
    );
  }

  private replaceLinksByAnchors(linksRecord: Record<string, MarkdownLink>) {
    return Object.keys(linksRecord).reduce((acc, key) => {
      return acc.replaceAll(
        linksRecord[key].toAnchorFormat(),
        `${linksRecord[key].text} ${key}`
      );
    }, this.markdownText);
  }

  private generateFootnotes(linksRecord: Record<string, MarkdownLink>) {
    return Object.keys(linksRecord).map(
      (key) => `${key}: ${linksRecord[key].url}`
    );
  }

  private appendsFootnotesToMarkdown(
    transformedMarkdown: string,
    footnotes: string[]
  ) {
    return [transformedMarkdown, ...footnotes].join('\n\n');
  }
}

export class MarkdownLink {
  constructor(
    readonly text: string,
    readonly url: string
  ) {}

  toEqual(aLink: MarkdownLink) {
    return this.text === aLink.text && this.url === aLink.url;
  }

  toAnchorFormat() {
    return `[${this.text}](${this.url})`;
  }
}
