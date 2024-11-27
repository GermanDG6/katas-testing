export class ItemQuality {
  private value: number;

  private MAX_QUALITY = 50;
  private MIN_QUALITY = 0;

  constructor(value) {
    this.value = value;
  }

  increase() {
    if (this.value < this.MAX_QUALITY) {
      return new ItemQuality(this.value + 1);
    }
    return new ItemQuality(this.value);
  }
  decrease() {
    if (this.value > this.MIN_QUALITY) {
      return new ItemQuality(this.value - 1);
    }
    return new ItemQuality(this.value);
  }
  reset() {
    return new ItemQuality(this.value - this.value);
  }
}
