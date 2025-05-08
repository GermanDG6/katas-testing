import { Account } from '../../account';
import { Console } from '../../console';
import { TransactionRespository } from '../../transaction-repository';

describe('Print Statement', () => {
  it('prints an account statement including the transactions made througth the console', () => {
    const console = new Console();
    const consoleSpy = jest.spyOn(console, 'log');
    const repository = new TransactionRespository();
    const account = new Account(repository);

    account.deposit(1000);
    account.withdraw(500);
    account.deposit(2000);

    account.printStatement();

    expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
    expect(consoleSpy).toHaveBeenCalledWith('14/01/2022 | 2000.00 | 2500.00');
    expect(consoleSpy).toHaveBeenCalledWith('13/01/2022 | -500.00 | 500.00');
    expect(consoleSpy).toHaveBeenCalledWith('10/01/2022 | 1000.00 | 1000.00');
  });
});
