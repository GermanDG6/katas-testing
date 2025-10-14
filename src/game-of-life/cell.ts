export enum CellStatus {
  Alive,
  Died,
}

export class Cell {
  private readonly minOfNeighborsToSurvive = 2;
  private readonly maxOfNeigborsToSurvive = 3;
  private readonly neighborsToRevive = 3;

  constructor(private readonly status: CellStatus) {
    if (this.status == null) throw new Error('Invalid status');
  }

  regenerate(numberOfNeighbors: number): Cell {
    if (this.isAlive() && this.hasNeighborsToSurvive(numberOfNeighbors))
      return new Cell(CellStatus.Alive);

    if (this.isDead() && this.hasNeighborsToRevive(numberOfNeighbors))
      return new Cell(CellStatus.Alive);

    return new Cell(CellStatus.Died);
  }

  isAlive() {
    return this.status === CellStatus.Alive;
  }

  private isDead() {
    return this.status === CellStatus.Died;
  }

  private hasNeighborsToRevive(numberOfNeighbors: number) {
    return numberOfNeighbors === this.neighborsToRevive;
  }

  private hasNeighborsToSurvive(numberOfNeighbors: number) {
    return (
      numberOfNeighbors === this.minOfNeighborsToSurvive ||
      numberOfNeighbors === this.maxOfNeigborsToSurvive
    );
  }
}
