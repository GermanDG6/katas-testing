import { Cell, CellStatus } from './cell';
import { World } from './world';

const { Alive, Dead } = CellStatus;

describe('The world', () => {
  it('creates a cell matrix for a given cell status ', () => {
    const initialStatus = [
      [Dead, Dead],
      [Dead, Alive],
    ];
    const world = World.createFrom(initialStatus);
    expect(world.cellMatrix).toEqual([
      [Cell.create(Dead), Cell.create(Dead)],
      [Cell.create(Dead), Cell.create(Alive)],
    ]);
  });

  it('gets alive neighbors for a given coordinates', () => {
    expect(World.createFrom([[Dead]]).aliveNeighbors(0,0)).toBe(0)
    expect(World.createFrom([[Alive, Alive]]).aliveNeighbors(0,1)).toBe(1)
    expect(World.createFrom([[Dead, Alive]]).aliveNeighbors(0,1)).toBe(0)
    expect(World.createFrom([[Alive, Alive, Alive]]).aliveNeighbors(0,1)).toBe(2)
    expect(World.createFrom([[Dead, Alive, Dead]]).aliveNeighbors(0,1)).toBe(0)
    expect(World.createFrom([[Alive, Alive, Alive],[Alive, Dead, Alive]]).aliveNeighbors(0,1)).toBe(4)
    expect(World.createFrom([[Dead, Alive, Dead],[Dead, Dead, Dead]]).aliveNeighbors(0,1)).toBe(0)
    expect(World.createFrom([[Alive, Alive, Alive],[Alive, Dead, Alive],[Alive, Alive, Alive]]).aliveNeighbors(1,1)).toBe(8)
  });

  it('generates the next state of the game', () => {
      const world = World.createFrom([[Dead,Alive,Dead],[Dead,Alive,Dead],[Dead,Alive,Dead]])

    const nextGeneration = world.nextGeneration().cellMatrix

    expect(nextGeneration).toEqual([
      [Cell.create(Dead),Cell.create(Dead),Cell.create(Dead)],
      [Cell.create(Alive), Cell.create(Alive), Cell.create(Alive)],
      [Cell.create(Dead),Cell.create(Dead),Cell.create(Dead)]])
  });

  it('never changes for a given initial block patern', () => {
      const world = World.createFrom([[Alive,Alive,Dead],[Alive,Alive,Dead],[Dead,Dead,Dead]])

    const nextWorld = world.nextGeneration().nextGeneration().nextGeneration()

    expect(nextWorld).toEqual(world)
  });

  it('reestablishes the same stater after two generations when a given oscillator pattern is provided', () => {
    const world = World.createFrom([[Dead,Alive,Dead],[Dead,Alive,Dead],[Dead,Alive,Dead]])

    const nextWorld = world.nextGeneration().nextGeneration()

    expect(nextWorld).toEqual(world)
  });
});

