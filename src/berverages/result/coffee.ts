import { Berverages } from './berverages';

export class Coffee implements Berverages {
  price(): number {
    return 1.2;
  }
}
