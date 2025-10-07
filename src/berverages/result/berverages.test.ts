import { Cinnamon } from './cinnamon';
import { Coffee } from './coffee';
import { CoffeeWithMilk } from './coffeeWithMilk';
import { CoffeeWithMilkAndCinnamon } from './coffeeWithMilkAndCinnamon';
import { CoffeeWithMilkAndCream } from './coffeeWithMilkAndCream';
import { Cream } from './Cream';
import { HotChocolate } from './hotChocolate';
import { HotChocolateWithCream } from './hotChocolateWithCream';
import { Milk } from './Milk';
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
    const milk = new Milk();
    const coffe = new Coffee();

    const coffeeWithMilk = new CoffeeWithMilk(milk, coffe).price();

    expect(coffeeWithMilk).toBe(price);
  });

  it('computed coffe whit milk and cinnamon price', () => {
    const price = 1.35;
    const milk = new Milk();
    const coffe = new Coffee();
    const cinnamon = new Cinnamon();

    const coffeeWithMilk = new CoffeeWithMilkAndCinnamon(
      coffe,
      milk,
      cinnamon
    ).price();

    expect(coffeeWithMilk).toBe(price);
  });

  it('computed coffe whit milk and cream price', () => {
    const price = 1.55;
    const coffe = new Coffee();
    const cream = new Cream();
    const milk = new Milk();

    const coffeeWithMilkAndCream = new CoffeeWithMilkAndCream(
      coffe,
      milk,
      cream
    ).price();

    expect(coffeeWithMilkAndCream).toBe(price);
  });

  it('computed hot chocolate with cream price', () => {
    const price = 1.7;
    const cream = new Cream();
    const hotChocolate = new HotChocolate();

    const hotChocolateWithMilk = new HotChocolateWithCream(
      cream,
      hotChocolate
    ).price();

    expect(hotChocolateWithMilk).toBe(price);
  });

  it('computed tea with milk price', () => {
    const price = 1.6;
    const tea = new Tea();
    const milk = new Milk();

    const teaWithMilk = new TeaWithMilk(tea, milk).price();

    expect(teaWithMilk).toBe(price);
  });
});
