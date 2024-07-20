import {Component, Input} from '@angular/core';
import {ProductDTO} from "../../../shared/dto/productDTO";
import {calculatePriceTTC, calulateTotalTaxe} from "../../../shared/functions/calculatePriceTTC";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-panier-item',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './panier-item.component.html',
  styleUrl: './panier-item.component.scss'
})
export class PanierItemComponent {
  @Input() product!: ProductDTO;

  protected readonly calculatePriceTTC = calculatePriceTTC;
  protected readonly calulateTotalTaxe = calulateTotalTaxe;
}
