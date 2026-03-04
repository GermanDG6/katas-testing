export enum CellStatus {
  Dead,
  Alive,
}

export class Cell {
  private constructor(private readonly status: CellStatus) {}

  static create(status: CellStatus) {
    if(status == null) {
      throw new Error('Invalid status');
    }
    return new Cell(status);
  }

  regenerate(numberOfNeighbors: number) {
    const nextStatus = this.isAlive()
      ? this.statusForAliveCell(numberOfNeighbors)
      : this.statusForDiedCell(numberOfNeighbors);

    return new Cell(nextStatus);
  }

  isAlive() {
    return this.status === CellStatus.Alive;
  }

  private statusForAliveCell(numberOfNeighbors: number) {
    const isStablePopulation = numberOfNeighbors < 2 || numberOfNeighbors > 3;
    return isStablePopulation ? CellStatus.Dead : CellStatus.Alive;
  }

  private statusForDiedCell(numberOfNeighbors: number) {
    const isFertilePopulation = numberOfNeighbors === 3;
    return isFertilePopulation ? CellStatus.Alive : CellStatus.Dead;
  }
}