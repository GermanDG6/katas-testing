import { Cell, CellStatus } from './cell';

export class World {
  private constructor(readonly cellMatrix: Cell[][]) {
  }

  static createFrom(initialStatus: CellStatus[][]) {
    const cellMatrix: Cell[][] = initialStatus.map((row) =>
      row.map((status) => Cell.create(status)),
    );

    return new World(cellMatrix);
  }

  aliveNeighbors(row: number, column: number): number {
    return (
      this.alivePreviousRowNeighbors(row, column) +
      this.aliveNextRowNeighbors(row, column) +
      this.aliveColumnNeighbors(column, row)
    );
  }

  nextGeneration() {
    const cellMatrix = this.cellMatrix.map((row, rowIndex) => {
      return row.map((cell, cellIndex) => {
        return cell.regenerate(this.aliveNeighbors(rowIndex, cellIndex));
      });
    });

    return new World(cellMatrix);
  }

  private alivePreviousRowNeighbors(row: number, column: number) {
    let aliveNeighbors = 0;
    const previousRow = row - 1;
    if (previousRow >= 0) {
      if (this.isAliveCellAt(previousRow, column)) {
        aliveNeighbors++;
      }
      aliveNeighbors += this.aliveColumnNeighbors(column, previousRow);
    }
    return aliveNeighbors;
  }

  private aliveNextRowNeighbors(row: number, column: number) {
    let aliveNeighbors = 0;
    const nextRow = row + 1;
    if (nextRow < this.cellMatrix.length) {
      if (this.isAliveCellAt(nextRow, column)) {
        aliveNeighbors++;
      }
      aliveNeighbors += this.aliveColumnNeighbors(column, nextRow);
    }
    return aliveNeighbors;
  }

  private aliveColumnNeighbors(column: number, row: number) {
    let aliveNeighbors = 0;

    const previousColumn = column - 1;
    if (previousColumn >= 0 && this.isAliveCellAt(row, previousColumn))
      aliveNeighbors++;

    const nextColumn = column + 1;
    const rowLength = this.cellMatrix[row].length;
    if (nextColumn < rowLength && this.isAliveCellAt(row, nextColumn))
      aliveNeighbors++;

    return aliveNeighbors;
  }

  private isAliveCellAt(row: number, column: number) {
    return this.cellMatrix[row][column].isAlive();
  }
}