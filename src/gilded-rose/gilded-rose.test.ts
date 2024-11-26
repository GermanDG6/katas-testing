import { GildedRose, Item } from './gilded-rose';

describe('Gilded Rose', () => {
  it('Should decrease by one the sellIn value after update', () => {
    const sellIn = 10;
    const item = new Item('item', sellIn, 10);

    new GildedRose([item]).updateQuality();

    expect(item.sellIn).toBe(sellIn - 1);
  });
  it('Should decrease by one the quality after update', () => {
    const quality = 20;
    const item = new Item('item', 10, quality);

    new GildedRose([item]).updateQuality();

    expect(item.quality).toBe(quality - 1);
  });
  it('Should decrease double quality when sell by date has passed', () => {
    const sellIn = 0;
    const quality = 20;
    const item = new Item('item', sellIn, quality);

    new GildedRose([item]).updateQuality();

    expect(item.quality).toBe(quality - 2);
  });
  it('The quality of an item never can be negative', () => {
    const quality = 0;
    const item = new Item('item', 0, quality);

    new GildedRose([item]).updateQuality();

    expect(item.quality).toBe(quality);
  });

  describe('Sulfuras', () => {
    it('never change', () => {
      const item = new Item('Sulfuras', 20, 25);

      new GildedRose([item]).updateQuality();

      expect(item).toBe(item);
    });
  });

  describe('Back Stage Passes', () => {
    it('Should increase quality by 2 for sellIn values of less than 10', () => {
      const sellIn = 10;
      const quality = 30;
      const item = new Item(
        'Backstage passes to a TAFKAL80ETC concert',
        sellIn,
        quality
      );

      new GildedRose([item]).updateQuality();

      expect(item.quality).toBe(quality + 2);
    });

    it('Should increase quality by 3 for sellIn values of less than 5', () => {
      const sellIn = 5;
      const quality = 30;
      const item = new Item(
        'Backstage passes to a TAFKAL80ETC concert',
        sellIn,
        quality
      );

      new GildedRose([item]).updateQuality();

      expect(item.quality).toBe(quality + 3);
    });
  });
});
