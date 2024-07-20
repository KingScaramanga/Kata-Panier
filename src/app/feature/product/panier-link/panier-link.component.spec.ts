import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierLinkComponent } from './panier-link.component';
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('PanierLinkComponent', () => {
  let component: PanierLinkComponent;
  let fixture: ComponentFixture<PanierLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanierLinkComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'someValue'
              }
            },
            paramMap: of({
              get: (key: string) => 'someValue'
            })
          }
        }
      ]
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
