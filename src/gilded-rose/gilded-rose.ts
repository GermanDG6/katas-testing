export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  private AGED_BRIE = 'Aged Brie';
  private BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
  private SULFURAS = 'Sulfuras, Hand of Ragnaros';

  private MIN_QUALITY = 0;
  private MAX_QUALITY = 50;

  private BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
  private BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_TRESHOLD = 5;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != this.AGED_BRIE &&
        this.items[i].name != this.BACKSTAGE_PASSES
      ) {
        if (this.items[i].quality > this.MIN_QUALITY) {
          if (this.items[i].name != this.SULFURAS) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < this.MAX_QUALITY) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == this.BACKSTAGE_PASSES) {
            if (
              this.items[i].sellIn <=
              this.BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
            ) {
              if (this.items[i].quality < this.MAX_QUALITY) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (
              this.items[i].sellIn <=
              this.BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_TRESHOLD
            ) {
              if (this.items[i].quality < this.MAX_QUALITY) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != this.SULFURAS) {
        this.decreaseSellIn(i);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != this.AGED_BRIE) {
          if (this.items[i].name != this.BACKSTAGE_PASSES) {
            if (this.items[i].quality > this.MIN_QUALITY) {
              if (this.items[i].name != this.SULFURAS) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < this.MAX_QUALITY) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }

  private decreaseSellIn(i: number) {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }
}
