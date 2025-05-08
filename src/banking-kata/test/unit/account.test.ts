import { Account } from '../../account';
import Date from '../../date';
import { StatementPrinter } from '../../statement-printer';
import { Transaction } from '../../transaction';
import { TransactionRespository } from '../../transaction-repository';

describe('The account', () => {
  const repository = new TransactionRespository(new Date());
  const statementPrinter = new StatementPrinter();
  const account = new Account(repository, statementPrinter);
  it('stores the deposit ammount througth the repository', () => {
    const addDepositSpy = jest.spyOn(repository, 'addDeposit');

    account.deposit(100);

    expect(addDepositSpy).toHaveBeenCalledWith(100);
  });

  it('stores the withdrawal ammount througth the repository', () => {
    const addWithDrawalSpy = jest.spyOn(repository, 'addWithDrawal');

    account.withdraw(100);

    expect(addWithDrawalSpy).toHaveBeenCalledWith(100);
  });

  it('prints a statement througth the statement printer', () => {
    const printerSpy = jest.spyOn(statementPrinter, 'print');
    const transactions = [
      new Transaction('25/3/2025', 100),
      new Transaction('21/4/2025', -200),
    ];
    repository.allTransactions = () => transactions;

    account.printStatement();

    expect(printerSpy).toHaveBeenCalledWith(transactions);
  });
});
