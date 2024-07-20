import {Component, Input} from '@angular/core';
import {calculatePriceTTC} from "../../../shared/functions/calculatePriceTTC";
import { ProductDTO } from '../../../shared/dto/productDTO';
import {DecimalPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-total-price',
  standalone: true,
  imports: [
    NgIf,
    DecimalPipe
  ],
  templateUrl: './total-price.component.html',
  styleUrl: './total-price.component.scss'
})
export class TotalPriceComponent {
  @Input() panierList!: ProductDTO[];

  constructor() {
  }

  calulateTotalTTCPrice(): number {
    let prixTTC = 0;
    for(let product of this.panierList){
      prixTTC+=calculatePriceTTC(product)*product.quantity;
    }
    return prixTTC;
  }

  calculateTotalTaxe(): number{
    let totalTaxe = 0;
    for(let product of this.panierList){
      totalTaxe+= ( calculatePriceTTC(product)-product.price ) * product.quantity;
    }
    return Math.round(totalTaxe * 100) / 100;
  }
}
