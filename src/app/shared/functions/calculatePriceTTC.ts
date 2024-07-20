import {ProductDTO} from "../dto/productDTO";
import {TAUX_LIVRE, TAUX_STANDARD, TAUX_SURTAXE} from "../constants/taux-constants";
import {LIVRE} from "../constants/categorie-constants";

export function calculatePriceTTC(product: ProductDTO){
  let priceTTC = product.price;

  if (product.category===LIVRE){
    priceTTC += arrondiTaxe(priceTTC * TAUX_LIVRE / 100);
  } else{
    priceTTC += arrondiTaxe(priceTTC * TAUX_STANDARD / 100);
  }

  if (product.isImported) {
    priceTTC += arrondiTaxe(priceTTC * TAUX_SURTAXE / 100);
  }

  return Math.round(priceTTC * 100) / 100;
}

export function arrondiTaxe(taxe: number): number{
  return Math.ceil(taxe * 20) / 20;
}

export function calulateTotalTaxe(product: ProductDTO){
  return Math.round((calculatePriceTTC(product) - product.price)*100) / 100;
}
