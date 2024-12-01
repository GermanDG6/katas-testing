import { Berverages } from './berverages';
import { Milk } from './Milk';
import { Tea } from './tea';

export class TeaWithMilk implements Berverages {
  constructor(
    private tea: Tea,
    private milk: Milk
  ) {}
  price(): number {
    return this.tea.price() + this.milk.price();
  }
}
