import {Component, OnInit} from '@angular/core';
import {CategorieListComponent} from "./categorie-list/categorie-list.component";
import {ProductService} from "./product.service";
import {ProductCardComponent} from "./product-card/product-card.component";
import {NgForOf} from "@angular/common";
import {PanierLinkComponent} from "./panier-link/panier-link.component";
import {DataService} from "../../shared/data/data.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CategorieListComponent,
    ProductCardComponent,
    NgForOf,
    PanierLinkComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  categoryList: string[] = [];

  constructor(protected productService: ProductService, protected sharedData: DataService) { }

  ngOnInit() {
      this.initCategoryList();
      this.productService.initProductList();
  }
  initCategoryList(){
    this.sharedData.dataProduct.map(data=>{
      if (this.categoryList.indexOf(data.category)==-1){
        this.categoryList.push(data.category)
      }
    });
  }

}
