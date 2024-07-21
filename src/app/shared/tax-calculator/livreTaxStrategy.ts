import {TaxStrategy} from "./taxStrategy";
import {arrondiTaxe} from "../functions/calculatePriceTTC";
import {TAUX_LIVRE} from "../constants/taux-constants";

export class LivreTaxStrategy implements TaxStrategy{
  calculateTaxe(prixHt: number): number {
    return prixHt + arrondiTaxe(prixHt * TAUX_LIVRE / 100);
  }

}
