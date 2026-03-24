import { Coordinates } from './coordinates';
import { NavigatorFacingNorth } from './navigator';
import { Rover } from './mars-rover';

describe('The Mars Rover', () => {
  it.each([
    ['L', '0:0:W'],
    ['R', '0:0:E'],
    ['F', '0:1:N'],
    ['LF', '9:0:W'],
    ['FLLFR', '0:0:W'],
  ])(
    'generates the expected formatted location after executes the given raw commands',
    (rawCommands, expectedLocation) => {
      const coordinates = Coordinates.create(0, 0);
      const navigator = new NavigatorFacingNorth(coordinates);
      const rover = new Rover(navigator);

      expect(rover.run(rawCommands)).toBe(expectedLocation);
    }
  );
  it('does not allow a given invalid raw command', () => {
    const coordinates = Coordinates.create(0, 0);
    const navigator = new NavigatorFacingNorth(coordinates);
    const rover = new Rover(navigator);

    expect(() => rover.run('A')).toThrow('Invalid command');
    expect(() => rover.run('')).toThrow('Invalid command');
    expect(() => rover.run(null)).toThrow('Invalid command');
  });
});
