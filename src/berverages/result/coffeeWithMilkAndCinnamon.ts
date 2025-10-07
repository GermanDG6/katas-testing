import { Cinnamon } from './cinnamon';
import { Coffee } from './coffee';
import { Milk } from './milk';

export class CoffeeWithMilkAndCinnamon {
  constructor(
    private coffe: Coffee,
    private milk: Milk,
    private cinnamon: Cinnamon
  ) {}
  price() {
    return this.coffe.price() + this.milk.price() + this.cinnamon.price();
  }
}
