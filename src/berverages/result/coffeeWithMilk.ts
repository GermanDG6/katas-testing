import { Coffee } from './coffee';
import { Milk } from './Milk';

export class CoffeeWithMilk {
  constructor(
    private milk: Milk,
    private coffe: Coffee
  ) {}
  price() {
    return this.coffe.price() + this.milk.price();
  }
}
