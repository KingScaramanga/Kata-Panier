import {Component, Input, OnInit} from '@angular/core';
import {ProductDTO} from "../../../shared/dto/productDTO";
import {ProductService} from "../product.service";
import {DecimalPipe, NgIf} from "@angular/common";
import {calculatePriceTTC} from "../../../shared/functions/calculatePriceTTC";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    DecimalPipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{
  @Input() product!: ProductDTO;
  selectedQuantity: number = 0;
  quantityList: number[] = [];


  constructor(protected productService: ProductService) {
  }

  addPanier(product: ProductDTO) {
    this.productService.addPanier(product, this.selectedQuantity);

    for(let removalIndex = 1; removalIndex<=this.selectedQuantity; removalIndex++){
      this.quantityList.pop();
    }
    this.selectedQuantity=0;
  }

  calculatePriceTTC(): number{
    return calculatePriceTTC(this.product);
  }

  ngOnInit(): void {
    for(let index = 1; index<=this.product.quantity; index++){
      this.quantityList.push(index);
    }
  }
}
