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
      if (this.items[i].name == this.SULFURAS) return;

      this.decreaseSellIn(i);

      if (this.items[i].name === this.AGED_BRIE) {
        this.upadteAgedBrieQuality(i);
      } else if (this.items[i].name === this.BACKSTAGE_PASSES) {
        this.updateBackStagePassesQuality(i);
      } else {
        this.updateStandarItemQuality(i);
      }
    }

    return this.items;
  }

  private updateStandarItemQuality(i: number) {
    this.decreaseQuality(i);
    if (this.items[i].sellIn < 0) {
      this.decreaseQuality(i);
    }
  }

  private upadteAgedBrieQuality(i: number) {
    this.increaseQuality(i);

    if (this.items[i].sellIn < 0) {
      this.increaseQuality(i);
    }
  }

  private updateBackStagePassesQuality(i: number) {
    this.increaseQuality(i);
    if (
      this.items[i].sellIn <=
      this.BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
    ) {
      this.increaseQuality(i);
    }
    if (
      this.items[i].sellIn <=
      this.BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_TRESHOLD
    ) {
      this.increaseQuality(i);
    }
    if (this.items[i].sellIn < 0) {
      this.resetQuality(i);
    }
  }

  private resetQuality(i: number) {
    this.items[i].quality = this.items[i].quality - this.items[i].quality;
  }

  private increaseQuality(i: number) {
    if (this.items[i].quality < this.MAX_QUALITY) {
      this.items[i].quality = this.items[i].quality + 1;
    }
  }

  private decreaseQuality(i: number) {
    if (this.items[i].quality > this.MIN_QUALITY) {
      this.items[i].quality = this.items[i].quality - 1;
    }
  }

  private decreaseSellIn(i: number) {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }
}
