import { HotChocolate } from './hotChocolate';

export class HotChocolateWithCream extends HotChocolate {
  constructor() {
    super();
  }
  price(): number {
    return super.price() + 0.25;
  }
}
