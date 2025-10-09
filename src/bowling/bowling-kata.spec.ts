class BowlingGame {
  private rolls: number[] = [];
  private readonly maxScorePerFrame = 10;

  roll(bowls: number) {
    this.rolls.push(bowls);
  }

  calculateTotalScore() {
    const score = this.frames().reduce(this.calculatesScorePerFrame, {
      totalScore: 0,
      frameIndex: 0,
    });
    return score.totalScore;
  }

  private calculatesScorePerFrame = ({ totalScore, frameIndex }: Score) => {
    if (this.isStrike(frameIndex)) {
      return {
        totalScore:
          totalScore + this.maxScorePerFrame + this.strikeBonus(frameIndex),
        frameIndex: frameIndex + 1,
      };
    }
    if (this.isSpare(frameIndex)) {
      return {
        totalScore:
          totalScore + this.maxScorePerFrame + this.spareBonus(frameIndex),
        frameIndex: frameIndex + 2,
      };
    }
    return {
      totalScore: totalScore + this.sumOfBallsInFrame(frameIndex),
      frameIndex: frameIndex + 2,
    };
  };

  private isStrike(frameIndex: number) {
    return this.rolls[frameIndex] === this.maxScorePerFrame;
  }

  private strikeBonus(frameIndex: number) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  private isSpare(frameIndex: number) {
    return this.sumOfBallsInFrame(frameIndex) === this.maxScorePerFrame;
  }

  private spareBonus(frameIndex: number) {
    return this.rolls[frameIndex + 2];
  }

  private sumOfBallsInFrame(frameIndex: number) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  private frames(): number[] {
    const numberOfFrames: number = 10;

    return Array.from({ length: numberOfFrames }).map((_, i) => i);
  }
}

type Score = {
  totalScore: number;
  frameIndex: number;
};

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
    spareFrame(game);
    game.roll(5);
    rollsMany(17, 0);

    expect(game.calculateTotalScore()).toEqual(20);
  });
  it('should calculate a strike and sum the points extra', () => {
    game.roll(10);
    game.roll(2);
    game.roll(3);
    rollsMany(16, 0);

    expect(game.calculateTotalScore()).toEqual(20);
  });

  function rollsMany(tries: number = 20, pins: number) {
    Array.from({ length: tries }).forEach(() => game.roll(pins));
  }
  function spareFrame(game: BowlingGame) {
    game.roll(5);
    game.roll(5);
  }
});

// -- -- -- -- -- -- -- -- -- -- => 0 puntos
// 11 11 11 11 11 11 11 11 11 11 => 20 puntos
//
