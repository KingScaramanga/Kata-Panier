import {Component, OnInit} from '@angular/core';
import {ProductDTO} from "../../../shared/dto/productDTO";
import {DataService} from "../../../shared/data/data.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-panier-link',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './panier-link.component.html',
  styleUrl: './panier-link.component.scss'
})
export class PanierLinkComponent implements OnInit{
  panierList$: ProductDTO[] = [];

  constructor(protected sharedData: DataService) {
  }

  ngOnInit(): void {
    this.sharedData.panierList.subscribe(list=>{
      this.panierList$=list
    });
  }

  calculePanier() {
    let quantity = 0
    for( let item of this.panierList$){
      quantity+=Number(item.quantity);
    }
    return quantity;
  }
}
