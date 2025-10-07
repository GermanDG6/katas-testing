import { Item } from './Item';
import { ItemName } from './item-name';
import { ItemQuality } from './item-quality';
import { ItemSellIn } from './item-sellIn';

export class Sulfuras extends Item {
  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality);
  }
  update() {}
}
