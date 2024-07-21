import {TaxStrategy} from "./taxStrategy";

export class PremiereNecessiteStrategy implements TaxStrategy{
  calculateTaxe(prixHt: number): number {
    return prixHt;
  }

}
