import { Coordinates } from './coordinates';
import {
  NavigatorFacingEast,
  NavigatorFacingNorth,
  NavigatorFacingSouth,
  NavigatorFacingWest,
} from './navigator';

describe('Navigator', () => {
  describe('when facing North', () => {
    it('should have West to the left', () => {
      const navigator = new NavigatorFacingNorth(Coordinates.create(0, 0));

      expect(navigator.left()).toBeInstanceOf(NavigatorFacingWest);
    });
    it('should have East to the right', () => {
      const navigator = new NavigatorFacingNorth(Coordinates.create(0, 0));

      expect(navigator.right()).toBeInstanceOf(NavigatorFacingEast);
    });
    it('should continue facing North and increase longitude when moving forward', () => {
      const navigator = new NavigatorFacingNorth(Coordinates.create(0, 0));
      const nextNavigator = navigator.forward();

      expect(nextNavigator).toBeInstanceOf(NavigatorFacingNorth);
      expect(nextNavigator.currentPosition()).toEqual(Coordinates.create(0, 1));
      expect(nextNavigator.formattedLocation()).toEqual('0:1:N');
    });
  });
  describe('when facing West', () => {
    it('should have South to the left', () => {
      const navigator = new NavigatorFacingWest(Coordinates.create(0, 0));

      expect(navigator.left()).toBeInstanceOf(NavigatorFacingSouth);
    });
    it('should have North to the right', () => {
      const navigator = new NavigatorFacingWest(Coordinates.create(0, 0));

      expect(navigator.right()).toBeInstanceOf(NavigatorFacingNorth);
    });
    it('should continue facing West and increase longitude when moving forward', () => {
      const navigator = new NavigatorFacingWest(Coordinates.create(0, 0));
      const nextNavigator = navigator.forward();

      expect(nextNavigator).toBeInstanceOf(NavigatorFacingWest);
      expect(nextNavigator.currentPosition()).toEqual(Coordinates.create(9, 0));
      expect(nextNavigator.formattedLocation()).toEqual('9:0:W');
    });
  });
  describe('when facing South', () => {
    it('should have East to the left', () => {
      const navigator = new NavigatorFacingSouth(Coordinates.create(0, 0));

      expect(navigator.left()).toBeInstanceOf(NavigatorFacingEast);
    });
    it('should have West to the right', () => {
      const navigator = new NavigatorFacingSouth(Coordinates.create(0, 0));

      expect(navigator.right()).toBeInstanceOf(NavigatorFacingWest);
    });
    it('should continue facing South and increase longitude when moving forward', () => {
      const navigator = new NavigatorFacingSouth(Coordinates.create(0, 0));
      const nextNavigator = navigator.forward();

      expect(nextNavigator).toBeInstanceOf(NavigatorFacingSouth);
      expect(nextNavigator.currentPosition()).toEqual(Coordinates.create(0, 9));
      expect(nextNavigator.formattedLocation()).toEqual('0:9:S');
    });
  });
  describe('when facing East', () => {
    it('should have East to the left', () => {
      const navigator = new NavigatorFacingEast(Coordinates.create(0, 0));

      expect(navigator.left()).toBeInstanceOf(NavigatorFacingNorth);
    });
    it('should have South to the right', () => {
      const navigator = new NavigatorFacingEast(Coordinates.create(0, 0));

      expect(navigator.right()).toBeInstanceOf(NavigatorFacingSouth);
    });
    it('should continue facing East and increase longitude when moving forward', () => {
      const navigator = new NavigatorFacingEast(Coordinates.create(0, 0));
      const nextNavigator = navigator.forward();

      expect(nextNavigator).toBeInstanceOf(NavigatorFacingEast);
      expect(nextNavigator.currentPosition()).toEqual(Coordinates.create(1, 0));
      expect(nextNavigator.formattedLocation()).toEqual('1:0:E');
    });
  });
});
