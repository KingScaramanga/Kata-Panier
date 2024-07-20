import {Component, Input} from '@angular/core';
import {ProductDTO} from "../../../shared/dto/productDTO";
import {ProductService} from "../product.service";
import {DecimalPipe, NgIf} from "@angular/common";
import {calculatePriceTTC} from "../../../shared/functions/calculatePriceTTC";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    DecimalPipe,
    NgIf
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: ProductDTO;


  constructor(protected productService: ProductService) {
  }

  addPanier(product: ProductDTO) {
    this.productService.addPanier(product);
  }

  calculatePriceTTC(): number{
    return calculatePriceTTC(this.product);
  }
}
