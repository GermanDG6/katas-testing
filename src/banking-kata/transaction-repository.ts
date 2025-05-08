import Date from './date';
import { Transaction } from './transaction';

export class TransactionRespository {
  private transactions: Transaction[] = [];
  constructor(private readonly date: Date) {}

  allTransactions(): Transaction[] {
    return this.transactions;
  }
  addDeposit(ammount: number) {
    const transaction = new Transaction(this.date.todayAsString(), ammount);
    this.transactions.push(transaction);
  }
  addWithDrawal(ammount: number) {
    const transaction = new Transaction(this.date.todayAsString(), -ammount);
    this.transactions.push(transaction);
  }
}
