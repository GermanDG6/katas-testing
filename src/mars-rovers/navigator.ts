import { Coordinates } from './coordinates';

export type Navigator =
  | NavigatorFacingNorth
  | NavigatorFacingSouth
  | NavigatorFacingWest
  | NavigatorFacingEast;

export class NavigatorFacingSouth {
  constructor(private coordinates: Coordinates) {}

  formattedLocation() {
    return this.coordinates.toString() + ':S';
  }

  currentPosition() {
    return this.coordinates;
  }

  left() {
    return new NavigatorFacingEast(this.coordinates);
  }

  right() {
    return new NavigatorFacingWest(this.coordinates);
  }

  forward() {
    return new NavigatorFacingSouth(this.coordinates.decreaseLongitude());
  }
}

export class NavigatorFacingWest {
  constructor(private coordinates: Coordinates) {}

  left() {
    return new NavigatorFacingSouth(this.coordinates);
  }

  right() {
    return new NavigatorFacingNorth(this.coordinates);
  }

  forward() {
    return new NavigatorFacingWest(this.coordinates.decreaseLatitude());
  }

  currentPosition() {
    return this.coordinates;
  }

  formattedLocation() {
    return this.coordinates.toString() + ':W';
  }
}

export class NavigatorFacingEast {
  constructor(private coordinates: Coordinates) {}

  left() {
    return new NavigatorFacingNorth(this.coordinates);
  }

  right() {
    return new NavigatorFacingSouth(this.coordinates);
  }

  forward() {
    return new NavigatorFacingEast(this.coordinates.increaseLatitude());
  }

  currentPosition() {
    return this.coordinates;
  }

  formattedLocation() {
    return this.coordinates.toString() + ':E';
  }
}

export class NavigatorFacingNorth {
  constructor(private coordinates: Coordinates) {}

  left() {
    return new NavigatorFacingWest(this.coordinates);
  }

  right() {
    return new NavigatorFacingEast(this.coordinates);
  }

  forward() {
    return new NavigatorFacingNorth(this.coordinates.increaseLongitude());
  }

  currentPosition() {
    return this.coordinates;
  }

  formattedLocation() {
    return this.coordinates.toString() + ':N';
  }
}
