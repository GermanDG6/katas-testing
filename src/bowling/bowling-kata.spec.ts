class BowlingGame {
  private rolls: number[] = [];
  roll(bowls: number) {
    this.rolls.push(bowls);
  }

  calculateTotalScore() {
    return this.rolls.reduce((acc, current) => {
      return acc + current;
    });
  }
}

describe('The bowling game', () => {
  let game: BowlingGame;
  beforeEach(() => {
    game = new BowlingGame();
  });

  it('should give 0 points for a empty game', () => {
    rollsMany(20, 0);

    expect(game.calculateTotalScore()).toEqual(0);
  });
  it('should give 20 points for a game with all tries with 1 only one knockdown', () => {
    rollsMany(20, 1);

    expect(game.calculateTotalScore()).toEqual(20);
  });

  it('should calculate a spare and sum the points extra', () => {
    game.roll(5);
    game.roll(5);
    game.roll(5);
    rollsMany(17, 0);

    expect(game.calculateTotalScore()).toEqual(20);
  });

  function rollsMany(tries: number = 20, pins: number) {
    Array.from({ length: tries }).forEach(() => game.roll(pins));
  }
});

// -- -- -- -- -- -- -- -- -- -- => 0 puntos
// 11 11 11 11 11 11 11 11 11 11 => 20 puntos
//
