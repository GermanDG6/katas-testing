import { Console } from '../../console';
import { StatementPrinter } from '../../statement-printer';
import { Transaction } from '../../transaction';

describe('The statement printer', () => {
  let console;
  let consoleSpy;
  let statementPrinter;
  beforeEach(() => {
    console = new Console();
    consoleSpy = jest.spyOn(console, 'log');
    statementPrinter = new StatementPrinter(console);
  });
  it('always print the header througth the console', () => {
    statementPrinter.print([]);

    expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
  });
  it('prints a statement of account including a given transaction througth the console', () => {
    const transaction = new Transaction('10/01/2022', 1000);

    statementPrinter.print([transaction]);

    expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
    expect(consoleSpy).toHaveBeenCalledWith('10/01/2022 | 1000.00 | 1000.00');
  });
  it('prints a statement of account includes several transactions througth the console', () => {
    statementPrinter.print([
      new Transaction('13/01/2022', -500),
      new Transaction('10/01/2022', 1000),
    ]);

    expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
    expect(consoleSpy).toHaveBeenCalledWith('10/01/2022 | 1000.00 | 1000.00');
    expect(consoleSpy).toHaveBeenCalledWith('13/01/2022 | -500.00 | 500.00');
  });
});
