import { Cell, CellStatus } from './cell';

describe('In the game of life', () => {
  it('living cells with fewer than two neighbors die due to depopulation', () => {
    expect(new Cell(CellStatus.Alive).regenerate(1).isAlive()).toBe(false);
    expect(new Cell(CellStatus.Died).regenerate(1).isAlive()).toBe(false);
  });

  it('living cells with more than three neighbors die from overpopulation', () => {
    expect(new Cell(CellStatus.Alive).regenerate(4).isAlive()).toBe(false);
    expect(new Cell(CellStatus.Died).regenerate(4).isAlive()).toBe(false);
  });

  it('living cells with two or three neighbors survive.', () => {
    expect(new Cell(CellStatus.Alive).regenerate(2).isAlive()).toBe(true);
    expect(new Cell(CellStatus.Alive).regenerate(3).isAlive()).toBe(true);
    expect(new Cell(CellStatus.Died).regenerate(2).isAlive()).toBe(false);
  });

  it('dead cells with exactly 3 neighbors are revived', () => {
    expect(new Cell(CellStatus.Died).regenerate(3).isAlive()).toBe(true);
  });

  it(' should not be able to have an invalid state', () => {
    expect(() => new Cell(undefined)).toThrow();
    expect(() => new Cell(null)).toThrow();
  });
});
