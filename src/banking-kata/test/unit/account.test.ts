import { Account } from '../../account';
import { TransactionRespository } from '../../transaction-repository';
describe('The account', () => {
  const repository = new TransactionRespository();
  const account = new Account(repository);
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
});
