import { Berverages } from './Berverages.1';

export class HotChocolate implements Berverages {
  price(): number {
    return 1.45;
  }
}
