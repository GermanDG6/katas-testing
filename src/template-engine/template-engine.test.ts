type Dictionary = Map<string, string>

class TemplateEngine {
  constructor(
    private readonly template: string,
    private readonly variables: Dictionary
  ) {}

  parse() {
    let parsedText = this.template;
    const warnings: TemplateWarning[] = []
    this.variables.forEach((value, key) => {
      const variable = `{{${key}}}`;
      const variableAreNotInTemplate = !parsedText.includes(variable);
      if(variableAreNotInTemplate) {
        warnings.push(new TemplateWarning(`Variable ${key} are not in template`))
      }
      parsedText = parsedText.replaceAll(variable, value);
    });


    const parsedTemplate = new ParsedTemplate(parsedText, warnings);
    return this.addWarningsAbountNonReplacedVariable(parsedTemplate);
  }

private addWarningsAbountNonReplacedVariable(parsedTemplate: ParsedTemplate) {
  const variableRegex = `\{\{\[a-zA-Z0-9]+\}\}`;
  const matches = parsedTemplate.text.match(variableRegex);
  if (!matches) {
    return parsedTemplate;
  }
  const warnings: TemplateWarning[] = []
  matches.forEach(match => {
    warnings.push(new TemplateWarning(`Variable ${match.substring(2, match.length - 2)} could not replaced`))
  })
  return  parsedTemplate.addWarnings(warnings)
}
}

class TemplateWarning {
  constructor(readonly message: string) {}
}

class ParsedTemplate {
  constructor(readonly text: string, readonly  warnings: TemplateWarning[]){}

  containWarnings() {
    return this.warnings.length > 0;
  }

  addWarnings(warnings: TemplateWarning[]) {
    return new ParsedTemplate(this.text, this.warnings.concat((warnings)))
  }
}

describe('TemplateEngine', () => {

  it('should return the template text for a template without variables', () => {
    const template = 'template without variables';
    const variables: Dictionary = new Map()

    const parsedText = new TemplateEngine(template, variables).parse();

    expect(parsedText.text).toBe("template without variables");
  });

  it('should replace the variable with the word from the dictionary', () => {
    const template = 'template {{variable}}';
    const variable: Dictionary = new Map().set('variable', 'engine');
    const parsedTemplate = new TemplateEngine(template, variable).parse();

    expect(parsedTemplate.text).toBe('template engine');
  });

  it('should replace multiple variables with words from the dictionary', () => {
    const template = "This is a {{template}} with two {{variables}}";
    const variables: Dictionary = new Map().set(
      'template', 'template',).set('variables', 'variables')

    const parsedTemplate = new TemplateEngine(template, variables).parse();

    expect(parsedTemplate.text).toBe('This is a template with two variables')
  });

  it('should replace multiple variables for multiple occurrences with words from the dictionary', () => {
    const template = "This is a {{template}} with two occurrences {{template}}";
    const variables: Dictionary = new Map().set(
      'template', 'template',)

    const parsedTemplate = new TemplateEngine(template, variables).parse();

    expect(parsedTemplate.text).toBe('This is a template with two occurrences template');
  });

  it('should return the parsed text and related warnings when variables are not in template', () => {
    const template = "{{user}}";
    const variables: Dictionary = new Map()
      variables.set(
      'user', 'John',)
    variables.set('age', '30')
    variables.set('date', new Date().toString())

    const parsedTemplate = new TemplateEngine(template, variables).parse();

    expect(parsedTemplate.text).toBe('John');
    expect(parsedTemplate.containWarnings()).toBe(true);
    expect(parsedTemplate.warnings[0].message).toBe('Variable age are not in template');
    expect(parsedTemplate.warnings[1].message).toBe('Variable date are not in template');
  });

  it('should return the parsed text and related warnings when variables are not in Dictionary', () => {
    const template = "{{user}} is {{age}} years old";
    const variables: Dictionary = new Map()
      variables.set(
      'user', 'John',)

    const parsedTemplate = new TemplateEngine(template, variables).parse();

    expect(parsedTemplate.text).toBe('John is {{age}} years old');
    expect(parsedTemplate.containWarnings()).toBe(true);
    expect(parsedTemplate.warnings[0].message).toBe('Variable age could not replaced');
  });
})

