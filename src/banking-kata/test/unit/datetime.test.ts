import { Datetime } from '../../datetime';

class TestableDatetime extends Datetime {
  protected today(): Date {
    return new Date('2025-03-25');
  }
}
describe('The Date ', () => {
  it('gives today date in DD/MM/YY format', () => {
    const date = new TestableDatetime();

    const today = date.todayAsString();

    expect(today).toEqual('25/03/2025');
  });
});
