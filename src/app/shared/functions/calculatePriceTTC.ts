import {ProductDTO} from "../dto/productDTO";
import {TaxCalculator} from "../tax-calculator/taxCalculator";

export function calculatePriceTTC(product: ProductDTO){
  const taxCalculator = new TaxCalculator(product);
  return Math.round(taxCalculator.calculate() * 100) / 100;
}

export function arrondiTaxe(taxe: number): number{
  return Math.ceil(taxe * 20) / 20;
}

export function calulateTotalTaxe(product: ProductDTO){
  return Math.round((calculatePriceTTC(product) - product.price)*100) / 100;
}
