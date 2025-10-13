import { BowlingGame } from './bowling-game';

describe('The bowling game', () => {
  let game: BowlingGame;
  beforeEach(() => {
    game = new BowlingGame();
  });
  it('should have a total score of 0 for an empty game', () => {
    rollsMany(20, 0);

    expect(game.totalScore()).toEqual(0);
  });
  it('should have a total score of 20 points for a game with 1 pins hit down on each roll', () => {
    rollsMany(20, 1);

    expect(game.totalScore()).toEqual(20);
  });

  it('should calculates a spare and the bonus', () => {
    game.roll(5);
    game.roll(5);
    game.roll(5);
    rollsMany(17, 0);

    expect(game.totalScore()).toEqual(20);
  });

  it('should calculates a strike and the bonus', () => {
    game.roll(10);
    game.roll(2);
    game.roll(3);
    rollsMany(16, 0);

    expect(game.totalScore()).toEqual(20);
  });
  it('should calculates a perfect game', () => {
    rollsMany(22, 10);

    expect(game.totalScore()).toEqual(300);
  });

  function rollsMany(numberOfRolls: number, pinsPerRoll: number) {
    Array.from({ length: numberOfRolls }).map(() => game.roll(pinsPerRoll));
  }
});
