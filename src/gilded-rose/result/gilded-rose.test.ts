import { BackstagePasses } from './backstage-passes';
import { GildedRose } from './gilded-rose';
import { ItemName } from './item-name';
import { ItemQuality } from './item-quality';
import { ItemSellIn } from './item-sellIn';
import { StandartItem } from './standar-item';
import { Sulfuras } from './sulfuras';
describe('Gilded Rose', () => {
  it('Should decrease by one the sellIn value after update', () => {
    const sellIn = new ItemSellIn(10);
    const item = new StandartItem(
      new ItemName('item'),
      sellIn,
      new ItemQuality(10)
    );

    new GildedRose([item]).updateQuality();

    const expectedSellIn = new ItemSellIn(9);
    expect(item.sellIn).toEqual(expectedSellIn);
  });
  it('Should decrease by one the quality after update', () => {
    const quality = new ItemQuality(20);
    const item = new StandartItem(
      new ItemName('item'),
      new ItemSellIn(10),
      quality
    );

    new GildedRose([item]).updateQuality();

    const expectedQuality = new ItemQuality(19);
    expect(item.quality).toEqual(expectedQuality);
  });
  it('Should decrease double quality when sell by date has passed', () => {
    const sellIn = new ItemSellIn(0);
    const quality = new ItemQuality(20);
    const item = new StandartItem(new ItemName('item'), sellIn, quality);

    new GildedRose([item]).updateQuality();

    const expectedQuality = new ItemQuality(18);
    expect(item.quality).toEqual(expectedQuality);
  });
  it('The quality of an item never can be negative', () => {
    const quality = new ItemQuality(0);
    const item = new StandartItem(
      new ItemName('item'),
      new ItemSellIn(0),
      quality
    );

    new GildedRose([item]).updateQuality();

    expect(item.quality).toEqual(quality);
  });

  describe('Sulfuras', () => {
    it('never change', () => {
      const item = new Sulfuras(
        new ItemName('Sulfuras'),
        new ItemSellIn(20),
        new ItemQuality(25)
      );

      new GildedRose([item]).updateQuality();

      expect(item).toEqual(item);
    });
  });

  describe('Back Stage Passes', () => {
    it('Should increase quality by 2 for sellIn values of less than 10', () => {
      const sellIn = new ItemSellIn(10);
      const quality = new ItemQuality(30);
      const item = new BackstagePasses(
        'Backstage passes to a TAFKAL80ETC concert',
        sellIn,
        quality
      );

      new GildedRose([item]).updateQuality();

      const expectedQuality = new ItemQuality(32);
      expect(item.quality).toEqual(expectedQuality);
    });

    it('Should increase quality by 3 for sellIn values of less than 5', () => {
      const sellIn = new ItemSellIn(5);
      const quality = new ItemQuality(30);
      const item = new BackstagePasses(
        'Backstage passes to a TAFKAL80ETC concert',
        sellIn,
        quality
      );

      new GildedRose([item]).updateQuality();

      const expectedQuality = new ItemQuality(33);
      expect(item.quality).toEqual(expectedQuality);
    });
    it('Should quality drop to 0 after the concert', () => {
      const sellIn = new ItemSellIn(0);
      const quality = new ItemQuality(30);
      const item = new BackstagePasses(
        'Backstage passes to a TAFKAL80ETC concert',
        sellIn,
        quality
      );

      new GildedRose([item]).updateQuality();

      const expectedQuality = new ItemQuality(0);
      expect(item.quality).toEqual(expectedQuality);
    });
  });
});
