import {TaxStrategy} from "./taxStrategy";
import {ProductDTO} from "../dto/productDTO";
import {FOOD, LIVRE, MEDECINE} from "../constants/categorie-constants";
import {StandardTaxStrategy} from "./standardTaxStrategy";
import {LivreTaxStrategy} from "./livreTaxStrategy";
import {PremiereNecessiteStrategy} from "./premiereNecessiteStrategy";
import {ImportTaxStrategy} from "./importTaxStrategy";

export class TaxCalculator{
  private strategy: TaxStrategy;

  constructor(private product: ProductDTO) {
    this.strategy = this.createStrategy(product.category);

    if (product.isImported) {
      this.strategy = new ImportTaxStrategy(this.strategy);
    }
  }

  private createStrategy(category: string) {
    switch (category){
      case LIVRE: return new LivreTaxStrategy();
      case FOOD:
      case MEDECINE: return new PremiereNecessiteStrategy();
      default: return new StandardTaxStrategy();
    }
  }

  calculate(): number{
    return this.strategy.calculateTaxe(this.product.price);
  }
}
