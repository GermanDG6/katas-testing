import { Cell, CellStatus } from './cell';

describe('In the game of life', () => {
  it('living cells with fewer than two neighbors die due to depopulation', () => {
    expect(Cell.create(CellStatus.Alive).regenerate(1).isAlive()).toBe(false);
    expect(Cell.create(CellStatus.Died).regenerate(1).isAlive()).toBe(false);
  });

  it('living cells with more than three neighbors die from overpopulation', () => {
    expect(Cell.create(CellStatus.Alive).regenerate(4).isAlive()).toBe(false);
    expect(Cell.create(CellStatus.Died).regenerate(4).isAlive()).toBe(false);
  });

  it('living cells with two or three neighbors survive.', () => {
    expect(Cell.create(CellStatus.Alive).regenerate(2).isAlive()).toBe(true);
    expect(Cell.create(CellStatus.Alive).regenerate(3).isAlive()).toBe(true);
    expect(Cell.create(CellStatus.Died).regenerate(2).isAlive()).toBe(false);
  });

  it('dead cells with exactly 3 neighbors are revived', () => {
    expect(Cell.create(CellStatus.Died).regenerate(3).isAlive()).toBe(true);
  });

  it(' should not be able to have an invalid state', () => {
    expect(() => Cell.create(undefined)).toThrow();
    expect(() => Cell.create(null)).toThrow();
  });
});
