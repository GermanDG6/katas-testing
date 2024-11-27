export class ItemName {
  private value: string;

  private AGED_BRIE = 'Aged Brie';
  private BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
  private SULFURAS = 'Sulfuras, Hand of Ragnaros';

  constructor(value: string) {
    this.value = value;
  }

  isAgedBrie(): boolean {
    return this.value === this.AGED_BRIE;
  }
  isBackstagePasses(): boolean {
    return this.value === this.BACKSTAGE_PASSES;
  }
  isSulfuras(): boolean {
    return this.value === this.SULFURAS;
  }
}
