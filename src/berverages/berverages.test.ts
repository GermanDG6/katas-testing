import { Coffee } from './coffee';
import { CoffeeWithMilk } from './coffeeWithMilk';
import { CoffeeWithMilkAndCream } from './coffeeWithMilkAndCream';
import { HotChocolate } from './hotChocolate';
import { HotChocolateWithCream } from './hotChocolateWithCream';
import { Tea } from './tea';
import { TeaWithMilk } from './teaWithMilk';

describe('Berverages pricing tests', () => {
  it('computed coffee price', () => {
    const price = 1.2;

    const coffe = new Coffee().price();

    expect(coffe).toBe(price);
  });

  it('computed tea price', () => {
    const price = 1.5;

    const coffe = new Tea().price();

    expect(coffe).toBe(price);
  });

  it('computed hot chocolate price', () => {
    const price = 1.45;

    const coffe = new HotChocolate().price();

    expect(coffe).toBe(price);
  });

  it('computed coffe whit milk price', () => {
    const price = 1.3;

    const coffeeWithMilk = new CoffeeWithMilk().price();

    expect(coffeeWithMilk).toBe(price);
  });

  it('computed coffe whit milk and cream price', () => {
    const price = 1.55;

    const coffeeWithMilkAndCream = new CoffeeWithMilkAndCream().price();

    expect(coffeeWithMilkAndCream).toBe(price);
  });

  it('computed hot chocolate with cream price', () => {
    const price = 1.7;

    const hotChocolateWithMilk = new HotChocolateWithCream().price();

    expect(hotChocolateWithMilk).toBe(price);
  });

  it('computed tea with milk price', () => {
    const price = 1.6;

    const teaWithMilk = new TeaWithMilk().price();

    expect(teaWithMilk).toBe(price);
  });
});
