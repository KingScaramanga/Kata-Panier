import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierLinkComponent } from './panier-link.component';

describe('PanierLinkComponent', () => {
  let component: PanierLinkComponent;
  let fixture: ComponentFixture<PanierLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanierLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanierLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
