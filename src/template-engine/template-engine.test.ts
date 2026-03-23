import { Dictionary, TemplateEngine } from './template.engine';

describe('TemplateEngine', () => {
  it('should return the template text for a template without variables', () => {
    const template = 'template without variables';
    const variables: Dictionary = new Map();

    const parsedText = new TemplateEngine(template, variables).parse();

    expect(parsedText.text).toBe('template without variables');
  });

  it('should replace the variable with the word from the dictionary', () => {
    const template = 'template {{variable}}';
    const variable: Dictionary = new Map().set('variable', 'engine');
    const parsedTemplate = new TemplateEngine(template, variable).parse();

    expect(parsedTemplate.text).toBe('template engine');
  });

  it('should replace multiple variables with words from the dictionary', () => {
    const template = 'This is a {{template}} with two {{variables}}';
    const variables: Dictionary = new Map()
      .set('template', 'template')
      .set('variables', 'variables');

    const parsedTemplate = new TemplateEngine(template, variables).parse();

    expect(parsedTemplate.text).toBe('This is a template with two variables');
  });

  it('should replace multiple variables for multiple occurrences with words from the dictionary', () => {
    const template = 'This is a {{template}} with two occurrences {{template}}';
    const variables: Dictionary = new Map().set('template', 'template');

    const parsedTemplate = new TemplateEngine(template, variables).parse();

    expect(parsedTemplate.text).toBe(
      'This is a template with two occurrences template'
    );
  });

  it('should return the parsed text and related warnings when variables are not in template', () => {
    const template = '{{user}}';
    const variables: Dictionary = new Map();
    variables.set('user', 'John');
    variables.set('age', '30');
    variables.set('date', new Date().toString());

    const parsedTemplate = new TemplateEngine(template, variables).parse();

    expect(parsedTemplate.text).toBe('John');
    expect(parsedTemplate.containWarnings()).toBe(true);
    expect(parsedTemplate.warnings[0].message).toBe(
      'Variable age are not in template'
    );
    expect(parsedTemplate.warnings[1].message).toBe(
      'Variable date are not in template'
    );
  });

  it('should return the parsed text and related warnings when variables are not in Dictionary', () => {
    const template = '{{user}} is {{age}} years old';
    const variables: Dictionary = new Map();
    variables.set('user', 'John');

    const parsedTemplate = new TemplateEngine(template, variables).parse();

    expect(parsedTemplate.text).toBe('John is {{age}} years old');
    expect(parsedTemplate.containWarnings()).toBe(true);
    expect(parsedTemplate.warnings[0].message).toBe(
      'Variable age could not replaced'
    );
  });

  it('should return the text and related warnings when dictionary is null ', () => {
    const template = '{{user}}';
    const variables: Dictionary = null;

    const parsedTemplate = new TemplateEngine(template, variables).parse();

    expect(parsedTemplate.text).toBe('{{user}}');
    expect(parsedTemplate.containWarnings()).toBe(true);
    expect(parsedTemplate.warnings[0].message).toBe(
      'Dictionary is not defined'
    );
  });

  it('should return the text and related warnings when template is null ', () => {
    const template = null;
    const variables: Dictionary = new Map().set('user', 'John');

    const parsedTemplate = new TemplateEngine(template, variables).parse();

    expect(parsedTemplate.text).toBe('');
    expect(parsedTemplate.containWarnings()).toBe(true);
    expect(parsedTemplate.warnings[0].message).toBe('Template is not defined');
  });
});
