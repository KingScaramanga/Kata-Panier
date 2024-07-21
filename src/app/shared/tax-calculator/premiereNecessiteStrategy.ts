import {TaxStrategy} from "./taxStrategy";
import {arrondiTaxe} from "../functions/calculatePriceTTC";
import {TAUX_PREMIERE_NECESSITE} from "../constants/taux-constants";

export class PremiereNecessiteStrategy implements TaxStrategy{
  calculateTaxe(prixHt: number): number {
    return prixHt + arrondiTaxe(prixHt * TAUX_PREMIERE_NECESSITE / 100);
  }

}
