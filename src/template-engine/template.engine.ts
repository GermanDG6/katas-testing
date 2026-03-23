export type Dictionary = Map<string, string>;

export class TemplateEngine {
  constructor(
    private readonly template: string,
    private readonly variables: Dictionary
  ) {}

  parse() {
    if (this.variables == null)
      return this.templateWithWarningAboutVariablesNonDefined();

    const parsedTemplate = this.templateWithVariablesReplaced();

    return this.addWarningsAboutNonReplacedVariable(parsedTemplate);
  }

  private templateWithWarningAboutVariablesNonDefined() {
    return ParsedTemplate.create(this.template, [
      new TemplateWarning('Dictionary is not defined'),
    ]);
  }

  private templateWithVariablesReplaced() {
    const parsedTemplate = ParsedTemplate.create(this.template, []);
    let parsedText = parsedTemplate.text;
    this.variables.forEach((value, key) => {
      parsedText = parsedText.replaceAll(this.templateVariable(key), value);
      if (!parsedText.includes(this.templateVariable(key))) {
        parsedTemplate.addWarnings([
          new TemplateWarning(`Variable ${key} are not in template`),
        ]);
      }
    });
    return parsedTemplate;
  }

  private templateVariable(key: string) {
    return `\{\{${key}\}\}`;
  }

  private addWarningsAboutNonReplacedVariable(parsedTemplate: ParsedTemplate) {
    const variableRegex = `\{\{\[a-zA-Z0-9]+\}\}`;
    const matches = parsedTemplate.text.match(variableRegex);
    if (!matches) {
      return parsedTemplate;
    }
    matches.forEach((match) => {
      parsedTemplate.addWarnings([
        new TemplateWarning(
          `Variable ${match.substring(2, match.length - 2)} could not replaced`
        ),
      ]);
    });
  }
}

class TemplateWarning {
  constructor(readonly message: string) {}
}

class ParsedTemplate {
  constructor(
    readonly text: string,
    readonly warnings: TemplateWarning[]
  ) {}

  static create(text: string, warnings: TemplateWarning[]) {
    if (!text)
      return new ParsedTemplate('', [
        new TemplateWarning('Template is not defined'),
      ]);
    return new ParsedTemplate(text, warnings);
  }

  containWarnings() {
    return this.warnings.length > 0;
  }
  addWarnings(warnings: TemplateWarning[]) {
    return new ParsedTemplate(this.text, this.warnings.concat(warnings));
  }
}
