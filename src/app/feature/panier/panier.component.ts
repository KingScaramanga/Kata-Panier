import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/data/data.service";
import {ProductDTO} from "../../shared/dto/productDTO";
import {NgForOf, NgIf} from "@angular/common";
import {PanierItemComponent} from "./panier-item/panier-item.component";
import {ProductService} from "../product/product.service";
import {TotalPriceComponent} from "./total-price/total-price.component";

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PanierItemComponent,
    TotalPriceComponent
  ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent implements OnInit{

  panierList: ProductDTO[] = [];
  constructor(protected sharedData: DataService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.sharedData.panierList.subscribe(products=>{
      this.panierList = products;
    });
  }

  removeItem(product: ProductDTO) {
    const itemIndex = this.panierList.indexOf(product)
    this.panierList.splice(itemIndex, 1);
    this.productService.removeFromPanier(product);
  }
}
