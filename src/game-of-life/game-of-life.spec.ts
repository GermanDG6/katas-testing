enum CellStatus {
  Alive,
  Died,
}

export class Cell {
  private readonly status: CellStatus;
  private readonly minOfNeighborsForSurvive = 2;

  private readonly maxOfNeigborsToSurvive = 3;

  private readonly neighborsToRevive = 3;

  constructor(status: CellStatus) {
    this.status = status;
  }

  regenerate(numberOfNeighbors: number): CellStatus {
    if (this.isAlive() && this.hasNeighborsToSurvive(numberOfNeighbors))
      return CellStatus.Alive;
    if (this.isDead() && this.hasNeighborsToRevive(numberOfNeighbors))
      return CellStatus.Alive;
    return CellStatus.Died;
  }

  private hasNeighborsToRevive(numberOfNeighbors: number) {
    return numberOfNeighbors === this.neighborsToRevive;
  }

  private isDead() {
    return this.status === CellStatus.Died;
  }

  private isAlive() {
    return this.status === CellStatus.Alive;
  }

  private hasNeighborsToSurvive(numberOfNeighbors: number) {
    return (
      numberOfNeighbors === this.minOfNeighborsForSurvive ||
      numberOfNeighbors === this.maxOfNeigborsToSurvive
    );
  }
}

describe('In the game of life', () => {
  it('living cells with fewer than two neighbors die due to depopulation', () => {
    expect(new Cell(CellStatus.Alive).regenerate(1)).toBe(CellStatus.Died);
    expect(new Cell(CellStatus.Died).regenerate(1)).toBe(CellStatus.Died);
  });

  it('living cells with more than three neighbors die from overpopulation', () => {
    expect(new Cell(CellStatus.Alive).regenerate(4)).toBe(CellStatus.Died);
    expect(new Cell(CellStatus.Died).regenerate(4)).toBe(CellStatus.Died);
  });

  it('living cells with two or three neighbors survive.', () => {
    expect(new Cell(CellStatus.Alive).regenerate(2)).toBe(CellStatus.Alive);
    expect(new Cell(CellStatus.Alive).regenerate(3)).toBe(CellStatus.Alive);
    expect(new Cell(CellStatus.Died).regenerate(2)).toBe(CellStatus.Died);
  });

  it('dead cells with exactly 3 neighbors are revived', () => {
    expect(new Cell(CellStatus.Died).regenerate(3)).toBe(CellStatus.Alive);
  });
});
