import { Coffee } from './coffee';

export class CoffeeWithMilk extends Coffee {
  constructor() {
    super();
  }
  price() {
    return super.price() + 0.1;
  }
}
