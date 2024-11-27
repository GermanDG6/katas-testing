import { Item } from './item';
import { ItemQuality } from './item-quality';
import { ItemSellIn } from './item-sellIn';

export class StandartItem extends Item {
  constructor(name: string, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality);
  }
  update() {
    this.decreaseSellIn();

    this.decreaseQuality();
    if (this.sellIn.isLessThan(0)) {
      this.decreaseQuality();
    }
  }
}
