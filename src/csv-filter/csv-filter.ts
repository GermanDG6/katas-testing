export interface InvoiceLineFields {
  invoiceId: string;
  invoiceDate: string;
  grossAmount: string;
  netAmount: string;
  iva: string;
  igic: string;
  concept: string;
  cif: string;
  nif: string;
}

export class CsvFilter {
  private constructor(private readonly lines: string[]) {}
  static create(lines: string[]) {
    if (lines.length === 1) throw new Error('Single line is not allowed');
    return new CsvFilter(lines);
  }

  filteredLines() {
    const header = this.lines[0];
    const invoices = this.lines.slice(1);
    return [header].concat(this.takeUniqueInvoices(this.takeValidInvoices(invoices)));
  }

  takeUniqueInvoices(invoices: string[]) {
    const invoiceIds = invoices.map((invoice) => this.invoiceId(invoice));
    const duplicatedInvoices = invoiceIds.filter(
      (invoiceId, index) => invoiceIds.indexOf(invoiceId) !== index
    );
    return invoices.filter(
      (invoice) => !duplicatedInvoices.includes(this.invoiceId(invoice))
    )
  }

  private isValidInvoice = (invoice) => {
    const fields = invoice.split(',');
    const ivaField = fields[4];
    const igicField = fields[5];
    const netAmount = fields[3];
    const grossAmount = fields[2];
    const cif = fields[7];
    const nif = fields[8];

    const isOnlyATaxApplied = !ivaField || !igicField;
    const haveAnyTaxesApplied = ivaField || igicField;
    const haveNumericValue =
      !isNaN(Number(ivaField)) && !isNaN(Number(igicField));
    const areCifAndNifPopulated = cif && nif;
    const isNetAmountCorrect =
      this.hasCorrectAmount(netAmount, grossAmount, ivaField) ||
      this.hasCorrectAmount(netAmount, grossAmount, igicField);

    return (
      haveAnyTaxesApplied &&
      isOnlyATaxApplied &&
      haveNumericValue &&
      isNetAmountCorrect &&
      !areCifAndNifPopulated
    );
  };

  private takeValidInvoices(invoices: string[]) {
    return invoices.filter(this.isValidInvoice);
  }

  private invoiceId(invoice: string): string {
    return invoice.split(',')[0];
  }

  private hasCorrectAmount(
    netAmount: string,
    grossAmount: string,
    taxField: string
  ) {
    const parsedNetAmount = parseFloat(netAmount);
    const parsedGrossAmount = parseFloat(grossAmount);
    const parsedTaxField = parseFloat(taxField);
    return (
      parsedNetAmount ===
      parsedGrossAmount - (parsedGrossAmount * parsedTaxField) / 100
    );
  }
}
