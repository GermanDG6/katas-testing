enum CellStatus {
  Alive,
  Died,
}

export class Cell {
  status: CellStatus;
  constructor(status: CellStatus) {
    this.status = status;
  }

  regenerate(numberOfNeighbors: number): CellStatus {
    return CellStatus.Died;
  }
}

describe('The game of life', () => {
  it('Living cells with fewer than two neighbors die due to depopulation', () => {
    const cell = new Cell(CellStatus.Alive);

    const numberOfNeighbors = 1;
    const nextGeneration = cell.regenerate(numberOfNeighbors);
    expect(nextGeneration).toBe(CellStatus.Died);
  });
});
