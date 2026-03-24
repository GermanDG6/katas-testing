import { Coordinates } from './coordinates';

describe('Coordinates', () => {
  it('not allow negative latitude', () => {
    expect(() => Coordinates.create(-1, 0)).toThrow(
      'Negatives values are not allowed'
    );
  });
  it('not allow negative longitude', () => {
    expect(() => Coordinates.create(0, -1)).toThrow(
      'Negatives values are not allowed'
    );
  });
  it('wraps around latitude when reaching boundary', () => {
    const coordinates = Coordinates.create(10, 0);

    expect(coordinates).toEqual(Coordinates.create(0, 0));
  });
  it('wraps around longitude when reaching boundary', () => {
    const coordinates = Coordinates.create(0, 10);

    expect(coordinates).toEqual(Coordinates.create(0, 0));
  });
  it('should increase latitude by one', () => {
    const coordinates = Coordinates.create(5, 0);

    expect(coordinates.increaseLatitude()).toEqual(Coordinates.create(6, 0));
  });
  it('should increase longitude by one', () => {
    const coordinates = Coordinates.create(5, 0);

    expect(coordinates.increaseLongitude()).toEqual(Coordinates.create(5, 1));
  });
  it('should decrease latitude by one', () => {
    const coordinates = Coordinates.create(5, 0);
    expect(coordinates.decreaseLatitude()).toEqual(Coordinates.create(4, 0));

    const boundaryCoordinates = Coordinates.create(0, 0);
    expect(boundaryCoordinates.decreaseLatitude()).toEqual(
      Coordinates.create(9, 0)
    );
  });
  it('should decrease longitude by one', () => {
    const coordinates = Coordinates.create(5, 1);
    expect(coordinates.decreaseLongitude()).toEqual(Coordinates.create(5, 0));

    const boundaryCoordinates = Coordinates.create(0, 0);
    expect(boundaryCoordinates.decreaseLongitude()).toEqual(
      Coordinates.create(0, 9)
    );
  });
});
