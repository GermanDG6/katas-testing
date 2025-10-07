import { Tea } from './tea';

export class TeaWithMilk extends Tea {
  constructor() {
    super();
  }
  price(): number {
    return super.price() + 0.1;
  }
}
