export interface TaxStrategy{
  calculateTaxe(prixHt: number): number;
}
