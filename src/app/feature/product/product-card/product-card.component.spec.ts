import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import {ProductDTO} from "../../../shared/dto/productDTO";
import {calculatePriceTTC} from "../../../shared/functions/calculatePriceTTC";

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  const product: ProductDTO ={category: "", id: 0, isImported: false, price: 0, productName: "", quantity: 0}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate tax correctly for Imported Apple', () => {
    const appleProduct: ProductDTO = {
      id: 1,
      productName: 'Apple',
      price: 4.37,
      quantity: 1,
      isImported: true,
      category: 'Food'
    };
    const expectedPrice = 4.62;
    expect(calculatePriceTTC(appleProduct)).toBe(expectedPrice);
  });

  it('should calculate tax correctly for imported Book', () => {
    const bookProduct: ProductDTO = {
      id: 1,
      productName: 'livre',
      price: 16.38,
      quantity: 1,
      isImported: true,
      category: 'Books'
    };
    const expectedPrice = 18.98;
    expect(calculatePriceTTC(bookProduct)).toBe(expectedPrice);
  });

  it('should calculate tax correctly for homemade keyboard', () => {
    const bookProduct: ProductDTO = {
      id: 1,
      productName: 'keyboard',
      price: 9.16,
      quantity: 1,
      isImported: false,
      category: 'Electric'
    };
    const expectedPrice = 11.01;
    expect(calculatePriceTTC(bookProduct)).toBe(expectedPrice);
  });

});
