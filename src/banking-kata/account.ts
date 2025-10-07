import { StatementPrinter } from './statement-printer';
import { TransactionRespository } from './transaction-repository';

export class Account {
  constructor(
    private readonly repository: TransactionRespository,
    private statementPrinter: StatementPrinter
  ) {}

  deposit(ammount: number) {
    this.repository.addDeposit(ammount);
  }
  withdraw(ammount: number) {
    this.repository.addWithDrawal(ammount);
  }
  printStatement() {
    this.statementPrinter.print(this.repository.allTransactions());
  }
}
