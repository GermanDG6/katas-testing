import { Item } from './item';
import { ItemQuality } from './item-quality';
import { ItemSellIn } from './item-sellIn';

export class BackstagePasses extends Item {
  constructor(name: string, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality);
  }
  private BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
  private BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_TRESHOLD = 5;
  update() {
    this.decreaseSellIn();
    this.increaseQuality();
    if (
      this.sellIn.isLessThan(
        this.BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
      )
    ) {
      this.increaseQuality();
    }
    if (
      this.sellIn.isLessThan(
        this.BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_TRESHOLD
      )
    ) {
      this.increaseQuality();
    }
    if (this.sellIn.isLessThan(0)) {
      this.resetQuality();
    }
  }
}
