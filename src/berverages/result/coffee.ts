import { Berverages } from './Berverages.1';

export class Coffee implements Berverages {
  price(): number {
    return 1.2;
  }
}
