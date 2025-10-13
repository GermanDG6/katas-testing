export class BowlingGame {
  private readonly rolls: number[] = [];
  private readonly maxNumOfFrames = 10;

  private readonly maxPointsPerFrame = 10;

  totalScore() {
    const score = this.frames().reduce(this.calculateScorePerFrame(), {
      totalScore: 0,
      rollIndex: 0,
    });

    return score.totalScore;
  }

  roll(pins: number) {
    this.rolls.push(pins);
  }

  private calculateScorePerFrame() {
    return ({ totalScore, rollIndex }: Score) => {
      if (this.isStrike(rollIndex)) {
        return {
          totalScore:
            totalScore + this.rolls[rollIndex] + this.strikeBonus(rollIndex),
          rollIndex: rollIndex + 1,
        };
      }

      if (this.isSpare(rollIndex)) {
        return {
          totalScore:
            totalScore +
            this.pinsScoredInAFrame(rollIndex) +
            this.spareBonus(rollIndex),
          rollIndex: rollIndex + 2,
        };
      }

      return {
        totalScore: totalScore + this.pinsScoredInAFrame(rollIndex),
        rollIndex: rollIndex + 2,
      };
    };
  }

  private isStrike(rollIndex: number) {
    return this.rolls[rollIndex] === this.maxPointsPerFrame;
  }

  private strikeBonus(rollIndex: number) {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  private spareBonus(rollIndex: number) {
    return this.rolls[rollIndex + 2];
  }

  private isSpare(rollIndex: number) {
    return this.pinsScoredInAFrame(rollIndex) === this.maxPointsPerFrame;
  }

  private pinsScoredInAFrame(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

  private frames() {
    return Array.from({ length: this.maxNumOfFrames }).map((_, i) => i);
  }
}

type Score = {
  totalScore: number;
  rollIndex: number;
};
