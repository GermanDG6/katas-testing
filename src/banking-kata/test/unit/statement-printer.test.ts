import { Console } from '../../console';
import { StatementPrinter } from '../../statement-printer';

describe('The statement printer', () => {
  it('always print the header througth the console', () => {
    const console = new Console();
    const consoleSpy = jest.spyOn(console, 'log');
    const statementPrinter = new StatementPrinter(console);

    statementPrinter.print([]);

    expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
  });
});
