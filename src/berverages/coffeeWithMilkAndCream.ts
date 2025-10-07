import { Coffee } from './coffee';

export class CoffeeWithMilkAndCream extends Coffee {
  constructor() {
    super();
  }
  price() {
    return super.price() + 0.35;
  }
}
