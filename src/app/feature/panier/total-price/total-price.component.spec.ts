import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPriceComponent } from './total-price.component';
import {ProductDTO} from "../../../shared/dto/productDTO";

describe('TotalPriceComponent', () => {
  let component: TotalPriceComponent;
  let fixture: ComponentFixture<TotalPriceComponent>;
  const product: ProductDTO = {
    id: 0,
    productName: '',
    price: 0,
    quantity: 0,
    isImported: false,
    category: ''
  }
  const panierList = [product];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPriceComponent);
    component = fixture.componentInstance;
    component.panierList = panierList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
