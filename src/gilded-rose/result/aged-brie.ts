import { Item } from './Item';

export class AgedBrie extends Item {
  update() {
    this.decreaseSellIn();
    this.increaseQuality();

    if (this.sellIn.isLessThan(0)) {
      this.increaseQuality();
    }
  }
}
