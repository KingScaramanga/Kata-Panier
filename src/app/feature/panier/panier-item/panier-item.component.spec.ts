import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierItemComponent } from './panier-item.component';
import {ProductDTO} from "../../../shared/dto/productDTO";

describe('PanierItemComponent', () => {
  let component: PanierItemComponent;
  let fixture: ComponentFixture<PanierItemComponent>;
  const product: ProductDTO = {
    id: 0,
    productName: '',
    price: 0,
    quantity: 0,
    isImported: false,
    category: ''
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanierItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanierItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
