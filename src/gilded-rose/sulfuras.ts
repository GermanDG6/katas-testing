import { Item } from './item';
import { ItemQuality } from './item-quality';
import { ItemSellIn } from './item-sellIn';

export class Sulfuras extends Item {
  constructor(name: string, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality);
  }
  update() {}
}
