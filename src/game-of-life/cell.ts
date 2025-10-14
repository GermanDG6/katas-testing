export enum CellStatus {
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
