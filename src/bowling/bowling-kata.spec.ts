class BowlingGame {
  rolls: number[] = [];
  roll(bowls: number) {
    this.rolls.push(bowls);
  }
}

describe('The bowling game', () => {
  it('should give 0 points for a empty game', () => {
    const game = new BowlingGame();

    Array.from({ length: 20 }).forEach(() => game.roll(0));

    expect(game.calculateTotalScore()).toEqual(0);
  });

  it('should be able to roll a ball', () => {
    const game = new BowlingGame();
    game.roll(0);

    expect(game.rolls).toEqual([0]);
  });
});

// -- -- -- -- -- -- -- -- -- -- => 0 puntos
// 11 11 11 11 11 11 11 11 11 11 => 20 puntos
//
