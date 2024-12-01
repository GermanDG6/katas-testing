import { Berverages } from './berverages';

export class Tea implements Berverages {
  price(): number {
    return 1.5;
  }
}
