import { Console } from './console';
import { Transaction } from './transaction';

export class StatementPrinter {
  constructor(private readonly console: Console) {}
  print(transactions: Transaction[]) {
    const header = 'Date | Amount | Balance';
    this.console.log(header);
  }
}
