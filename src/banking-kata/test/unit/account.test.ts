import { Account } from '../../account';
import { TransactionRespository } from '../../transaction-repository';
describe('The account', () => {
  it('stores the deposit ammount througth the repository', () => {
    const repository = new TransactionRespository();
    const addDepositSpy = jest.spyOn(repository, 'addDeposit');
    const account = new Account(repository);

    account.deposit(100);

    expect(addDepositSpy).toHaveBeenCalledWith(100);
  });

  it('stores the withdrawal ammount througth the repository', () => {
    const repository = new TransactionRespository();
    const addWithDrawalSpy = jest.spyOn(repository, 'addWithDrawal');
    const account = new Account(repository);

    account.withdraw(100);

    expect(addWithDrawalSpy).toHaveBeenCalledWith(100);
  });
});
