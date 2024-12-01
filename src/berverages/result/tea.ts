import { Berverages } from './Berverages.1';

export class Tea implements Berverages {
  price(): number {
    return 1.5;
  }
}
