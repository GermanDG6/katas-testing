export class ItemSellIn {
  private value: number;

  constructor(value) {
    this.value = value;
  }

  decrease() {
    return new ItemSellIn(this.value - 1);
  }
  isLessThan(days: number) {
    return this.value < days;
  }
}
