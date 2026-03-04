import { Cell, CellStatus } from './cell';

describe('Game of life', () => {
  it('Any live cell with fewer than two live neighbors dies by underpopulation', () => {
    expect(Cell.create(CellStatus.Alive).regenerate(1).isAlive()).toBe(false);
    expect(Cell.create(CellStatus.Dead).regenerate(1).isAlive()).toBe(false);
  });

  it('Any live cell with two or three live neighbors live on the next generation', () => {
    expect(Cell.create(CellStatus.Alive).regenerate(2).isAlive()).toBe(true);
    expect(Cell.create(CellStatus.Alive).regenerate(3).isAlive()).toBe(true);
    expect(Cell.create(CellStatus.Dead).regenerate(2).isAlive()).toBe(false);
  });

  it('Any live cell with more then three live neighbors dies by overpopulation', () => {
    expect(Cell.create(CellStatus.Alive).regenerate(4).isAlive()).toBe(false);
    expect(Cell.create(CellStatus.Dead).regenerate(4).isAlive()).toBe(false);
  });

  it('A died cell with three live neighbors will be alive in the next generation', () => {
    expect(Cell.create(CellStatus.Dead).regenerate(3).isAlive()).toBe(true)
  });

  it('cells with undefined initial state are not allowed ', () => {
    expect(()=> Cell.create(null)).toThrow()
    expect(()=> Cell.create(undefined)).toThrow()
  });
});
