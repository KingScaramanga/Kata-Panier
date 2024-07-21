import { Injectable } from '@angular/core';
import {copyProduct, ProductDTO} from "../../shared/dto/productDTO";
import {DataService} from "../../shared/data/data.service";
import {SANS_CATEGORIE} from "../../shared/constants/categorie-constants";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  sharedProductList: ProductDTO[] = [];

  constructor(protected sharedDataService: DataService) { }

  filter(filterValue: string) {
    if (filterValue===SANS_CATEGORIE){
      this.initProductList();
    } else{
      this.sharedProductList = this.sharedDataService.dataProduct.filter(a=>a.category === filterValue && a.productName.length>0);
    }
  }

  initProductList() {
    this.sharedProductList = this.sharedDataService.dataProduct.filter(a=>a.productName.length>0);
  }

  addPanier(product: ProductDTO, quantity: number) {
    product.quantity-=quantity;

    const currentPanier = this.sharedDataService.panierList.value;
    const productInPanier = <ProductDTO>currentPanier.find(item => item.id === product.id);

    if (productInPanier){
      productInPanier.quantity = Number(productInPanier.quantity) + Number(quantity);
      console.log(productInPanier)
    } else{
      const updatedPanier = [...currentPanier, copyProduct(product, quantity)];
      this.sharedDataService.panierList.next(updatedPanier);
    }
  }

  removeFromPanier(product: ProductDTO) {
    const returnedProduct = this.sharedProductList.find(item=>item.id===product.id);
    if(returnedProduct){
      returnedProduct.quantity+= product.quantity;
    }
  }
}
