import { Console } from './console';
import { Transaction } from './transaction';

export class StatementPrinter {
  private readonly header = 'Date | Amount | Balance';
  constructor(private readonly console: Console) {}
  print(transactions: Transaction[]) {
    this.printStatement(transactions);
  }

  private printStatement(transactions: Transaction[]) {
    this.console.log(this.header);
    let balance = 0;
    transactions
      .map((transaction) => {
        balance += transaction.amount;
        return this.formatStatementLine(balance, transaction);
      })
      .reverse()
      .forEach((line) => this.console.log(line));
  }

  private formatStatementLine(balance: number, transaction: Transaction) {
    const formattedAmount = transaction.amount.toFixed(2);
    const formattedBalance = balance.toFixed(2);
    return `${transaction.date} | ${formattedAmount} | ${formattedBalance}`;
  }
}
