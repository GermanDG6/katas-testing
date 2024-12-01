import { Berverages } from './berverages';
import { Cream } from './Cream';
import { HotChocolate } from './hotChocolate';

export class HotChocolateWithCream implements Berverages {
  constructor(
    private hotChocolate: HotChocolate,
    private cream: Cream
  ) {}
  price(): number {
    return this.hotChocolate.price() + this.cream.price();
  }
}
