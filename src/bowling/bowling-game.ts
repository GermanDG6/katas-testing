export class BowlingGame {
  private rolls: number[] = [];
  private readonly maxScorePerFrame = 10;
  private readonly numberOfFrames: number = 10;

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
    return Array.from({ length: this.numberOfFrames }).map((_, i) => i);
  }
}
type Score = {
  totalScore: number;
  frameIndex: number;
};
