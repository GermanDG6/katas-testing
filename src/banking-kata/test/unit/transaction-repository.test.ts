import Date from '../../date';
import { Transaction } from '../../transaction';
import { TransactionRespository } from '../../transaction-repository';

describe('The transaction respository', () => {
  it('stores a deposit transaction for a given amount ', () => {
    const today = '25/3/2025';
    const amount = 100;

    const date = new Date();
    date.todayAsString = () => today;

    const respository = new TransactionRespository(date);

    respository.addDeposit(amount);

    const transactions = respository.allTransactions();

    expect(transactions[0]).toEqual(new Transaction(today, amount));
  });
  it('stores a withdrawal transaction for a given amount ', () => {
    const today = '25/3/2025';
    const amount = 100;

    const date = new Date();
    date.todayAsString = () => today;

    const respository = new TransactionRespository(date);

    respository.addWithDrawal(amount);

    const transactions = respository.allTransactions();

    expect(transactions[0]).toEqual(new Transaction(today, -amount));
  });
});
