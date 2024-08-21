import { CsvFilter } from './csv-filter';
describe('Csv Filter', () => {
  const header =
    'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
  it('Allows for correct lines only', () => {
    const invoiceLine = fileWithOneInvoiceLineHaving();

    const csvFilter = CsvFilter.create([header, invoiceLine]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header, invoiceLine]);
  });

  it('Allows only multiple correct lines', () => {
    const invoiceLine1 = fileWithOneInvoiceLineHaving();
    const invoiceLine2 = fileWithOneInvoiceLineHaving({ invoiceId: '2' });

    const csvFilter = CsvFilter.create([header, invoiceLine1, invoiceLine2]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header, invoiceLine1, invoiceLine2]);
  });

  it('allow only the correct lines when the igic tax is applied', () => {
    const invoiceLineWithANonDecimalTaxField = fileWithOneInvoiceLineHaving({
      ivaField: '',
      igicField: '7',
      netAmount: '930',
    });
    const csvFilter = CsvFilter.create([
      header,
      invoiceLineWithANonDecimalTaxField,
    ]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header, invoiceLineWithANonDecimalTaxField]);
  });

  it('excludes lines with both taxes fields populated as they are exclusives', () => {
    const invoiceLineWithBothTaxes = fileWithOneInvoiceLineHaving({
      ivaField: '21',
      igicField: '7',
    });
    const csvFilter = CsvFilter.create([header, invoiceLineWithBothTaxes]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header]);
  });

  it('exclude lines with both taxes fields emptys as one is required', () => {
    const incoiveLineWihoutTaxes = fileWithOneInvoiceLineHaving({
      ivaField: '',
      igicField: '',
    });
    const csvFilter = CsvFilter.create([header, incoiveLineWihoutTaxes]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header]);
  });

  it('exclude lines with non numeric tax fields', () => {
    const invoiceLineWithNonDecimalTaxField = fileWithOneInvoiceLineHaving({
      ivaField: 'Veintiuno',
    });
    const csvFilter = CsvFilter.create([
      header,
      invoiceLineWithNonDecimalTaxField,
    ]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header]);
  });

  it('exclude lines with both tax fields populated even if non decilmal', () => {
    const invoiceLineWithANonDecimalTaxField = fileWithOneInvoiceLineHaving({
      ivaField: 'Veintiuno',
      igicField: '7',
    });
    const csvFilter = CsvFilter.create([
      header,
      invoiceLineWithANonDecimalTaxField,
    ]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header]);
  });

  it('exclude lines with miscalculated net amount for iva tax', () => {
    const invoiceLineWithANetAmountMiscalculated = fileWithOneInvoiceLineHaving(
      {
        ivaField: '21',
        igicField: '',
        netAmount: '930',
      }
    );
    const csvFilter = CsvFilter.create([
      header,
      invoiceLineWithANetAmountMiscalculated,
    ]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header]);
  });

  it('exclude lines with miscalculated net amount for igic tax', () => {
    const invoiceLineWithANetAmountMiscalculated = fileWithOneInvoiceLineHaving(
      {
        ivaField: '',
        igicField: '7',
        netAmount: '900',
      }
    );
    const csvFilter = CsvFilter.create([
      header,
      invoiceLineWithANetAmountMiscalculated,
    ]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header]);
  });

  it('exclude lines with cif and nif populated as they are exclusives', () => {
    const invoiceLineWithCifAndNif = fileWithOneInvoiceLineHaving({
      nif: '00000000H',
    });
    const csvFilter = CsvFilter.create([header, invoiceLineWithCifAndNif]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header]);
  });

  it('exclude lines with with a existing invoiceId', () => {
    const invoiceLine1 = fileWithOneInvoiceLineHaving();
    const invoiceLine2 = fileWithOneInvoiceLineHaving({ invoiceId: '2' });
    const invoiceLine3 = fileWithOneInvoiceLineHaving({ invoiceId: '1' });
    const invoiceLine4 = fileWithOneInvoiceLineHaving({ invoiceId: '4' });
    const invoiceLine5 = fileWithOneInvoiceLineHaving({ invoiceId: '4' });
    const csvFilter = CsvFilter.create([
      header,
      invoiceLine1,
      invoiceLine2,
      invoiceLine3,
      invoiceLine4,
      invoiceLine5,
    ]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([header, invoiceLine2]);
  });
  
  it('A empty list will produce a empty list', () => {
    const csvFilter = CsvFilter.create([]);

    const result = csvFilter.filteredLines();

    expect(result).toEqual([]);
  });

  it('A file with only a line is incorrect', () => {
    const invoiceLine = fileWithOneInvoiceLineHaving();
    const result = () => CsvFilter.create([invoiceLine]);

    expect(result).toThrow();
  });
});

function fileWithOneInvoiceLineHaving({
  invoiceId = '1',
  ivaField = '21',
  igicField = '',
  netAmount = '790',
  cif = 'B76430134',
  nif = '',
}: {
  invoiceId?: string;
  ivaField?: string;
  igicField?: string;
  netAmount?: string;
  cif?: string;
  nif?: string;
} = {}) {
  const invoiceDate = '02/05/2021';
  const grossAmount = '1000';
  const concept = 'ACER Laptop';
  return [
    invoiceId,
    invoiceDate,
    grossAmount,
    netAmount,
    ivaField,
    igicField,
    concept,
    cif,
    nif,
  ].join(',');
}
/*
 Lista de pruebas:
 v - Un fichero con una sola factura donde todo es correcto, debería producir como salida la misma línea.
 v - Una factura donde aparezcan los impuestos IVA e IGIC, debe eliminar la línea
 v -(D)Un fichero con una sola factura donde no aparezcan ninguno de los impuestos, debe eliminar la linea. 
 v -(D)Los campos de impuestos sólo puede contener valores numéricos.
 v - Una factura donde aparezcan CIF y NIF, debe eliminar la línea.
 v - Una factura donde el neto este mal calculado, debería eliminar la línea.
 v - Un fichero que contenga facturas con el mismo id, debe eliminar las repetidas
 - Una lista vacía tendrá como salida una lista vacía
 - Un fichero de una sola línea, es incorrecto, ya que no tiene cabecera
(D)= dinámico, test añadido durante el proceso 
*/
