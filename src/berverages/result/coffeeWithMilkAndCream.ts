import { Coffee } from './coffee';
import { Cream } from './cream';
import { Milk } from './milk';

export class CoffeeWithMilkAndCream {
  constructor(
    private coffe: Coffee,
    private milk: Milk,
    private cream: Cream
  ) {}
  price() {
    return this.coffe.price() + this.milk.price() + this.cream.price();
  }
}
