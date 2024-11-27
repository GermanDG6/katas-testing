import { ItemQuality } from './item-quality';
import { ItemSellIn } from './item-sellIn';

export abstract class Item {
  name: string;
  sellIn: ItemSellIn;
  quality: ItemQuality;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  abstract update();

  decreaseSellIn() {
    this.sellIn = this.sellIn.decrease();
  }
  resetQuality() {
    this.quality = this.quality.reset();
  }

  increaseQuality() {
    this.quality = this.quality.increase();
  }

  decreaseQuality() {
    this.quality = this.quality.decrease();
  }
}
