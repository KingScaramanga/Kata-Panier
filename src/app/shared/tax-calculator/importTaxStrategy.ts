import {TaxStrategy} from "./taxStrategy";
import {arrondiTaxe} from "../functions/calculatePriceTTC";
import {TAUX_SURTAXE} from "../constants/taux-constants";

export class ImportTaxStrategy implements TaxStrategy{
  categorieTax: TaxStrategy;

  constructor(categorieTax: TaxStrategy) {
    this.categorieTax = categorieTax;
  }

  calculateTaxe(prixHt: number): number {
    const prixPremiereTax = this.categorieTax.calculateTaxe(prixHt)
    return prixPremiereTax + arrondiTaxe((prixPremiereTax * TAUX_SURTAXE / 100));
  }

}
