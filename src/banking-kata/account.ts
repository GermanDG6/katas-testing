import { TransactionRespository } from './transaction-repository';

export class Account {
  constructor(private readonly repository: TransactionRespository) {}

  deposit(ammount: number) {
    this.repository.addDeposit(ammount);
  }
  withdraw(ammount: number) {
    this.repository.addWithDrawal(ammount);
  }
  printStatement() {}
}
