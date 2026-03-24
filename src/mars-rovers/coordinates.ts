export class Coordinates {
  private static readonly latitudeBoundary = 10;
  private static readonly longitudeBoundary = 10;
  private constructor(
    private readonly latitude: number,
    private readonly longitude: number
  ) {}

  static create(latitude: number, longitude: number) {
    if (latitude < 0 || longitude < 0)
      throw new Error('Negatives values are not allowed');
    if (latitude >= this.latitudeBoundary) {
      latitude = latitude % this.latitudeBoundary;
    }
    if (longitude >= this.longitudeBoundary) {
      longitude = longitude % this.longitudeBoundary;
    }

    return new Coordinates(latitude, longitude);
  }

  increaseLatitude() {
    return Coordinates.create(this.latitude + 1, this.longitude);
  }

  increaseLongitude() {
    return Coordinates.create(this.latitude, this.longitude + 1);
  }

  decreaseLatitude() {
    if (this.latitude === 0)
      return Coordinates.create(
        Coordinates.latitudeBoundary - 1,
        this.longitude
      );
    return Coordinates.create(this.latitude - 1, this.longitude);
  }

  decreaseLongitude() {
    if (this.longitude === 0)
      return Coordinates.create(
        this.latitude,
        Coordinates.longitudeBoundary - 1
      );
    return Coordinates.create(this.latitude, this.longitude - 1);
  }
  toString(){
    return `${this.latitude}:${this.longitude}`
  }
}
