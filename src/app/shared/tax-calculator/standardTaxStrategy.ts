import {TaxStrategy} from "./taxStrategy";
import {TAUX_STANDARD} from "../constants/taux-constants";
import {arrondiTaxe} from "../functions/calculatePriceTTC";

export class StandardTaxStrategy implements TaxStrategy{
  calculateTaxe(prixHt: number): number {
    return prixHt + arrondiTaxe(prixHt * TAUX_STANDARD / 100);
  }

}
