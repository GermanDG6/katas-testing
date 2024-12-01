import { Berverages } from './berverages';

export class HotChocolate implements Berverages {
  price(): number {
    return 1.45;
  }
}
